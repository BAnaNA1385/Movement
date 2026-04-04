import * as THREE from "three";
import { GeometryViewer } from "./geometry-viewer.js";
import { Vector } from "./Vector.js";
import { Line } from "./Line.js";
import { SpeedChart } from "./SpeedChart.js";
import { 
    computeSuspensionGeometry
} from "./SuspensionGeometry2D.js";
import type { SuspensionInput, Vec2 } from "./SuspensionGeometry2D.js";
import { 
    computeAntiDiveGeometry, 
    computeActuationPoints,
    type Point3D 
} from "./GeometryTools.js";
import { optimizeToe, type ToeOptimizerConfig } from "./ToeOptimizer.js";

const app = document.getElementById("app") as HTMLElement;
if (!app) throw new Error("No #app element");

const viewer = new GeometryViewer(app);
const vectorPanel = viewer.getVectorPanel();

const O = viewer.addPoint(5 / 100, 580.16 / 100, 112.65 / 100, "O");
const E = viewer.addPoint(-6.5 / 100, 566.138 / 100, 274.6 / 100, "E");

const A = viewer.addPoint(160 / 100, 100 / 100, 108.075 / 100, "A");
const B = viewer.addPoint(-40 / 100, 100 / 100, 108.075 / 100, "B");
const C = viewer.addPoint(-120 / 100, 245 / 100, 226.292 / 100, "C");
const D = viewer.addPoint(120 / 100, 245 / 100, 274.719 / 100, "D");

const F = viewer.addPoint(67.176 / 100, 576.546 / 100, 223.748 / 100, "F");
const T = viewer.addPoint(0, 145.01 / 100, 185.65 / 100, "T");

const H = viewer.addPoint(-4.993/100, 526.45 / 100, 298.85 / 100, "H");
const I = viewer.addPoint(-33.835/100, 80 / 100, 663.5 / 100, "I");

const J = viewer.addPoint(65/100,132.3 / 100, 546.43 / 100, "J"); 
const K = viewer.addPoint(65/100,168.74 / 100,591.02 / 100, "K");

const L = viewer.addPoint(235/100,80 / 100, 663.5 / 100, "L");
const M = viewer.addPoint(65/100, 80 / 100, 663.5/ 100, "M");

// FIX: Realistic 320mm Wheel Radius (25 inch tire diameter)
const WHEEL_RADIUS = 3.2;
let wheelVisible = true;
viewer.createWheel(O.position.toVector3(), WHEEL_RADIUS);

const btnStopTime = document.getElementById("btn-stop-time") as HTMLButtonElement;
const btnStopCamera = document.getElementById("btn-stop-camera") as HTMLButtonElement;
const btnToggleChart = document.getElementById("btn-toggle-chart") as HTMLButtonElement;
const btnToggleWheel = document.getElementById("btn-toggle-wheel") as HTMLButtonElement;

let prevPushrodZ = 0;
let timeStopped = false;
btnStopTime?.addEventListener("click", () => {
    timeStopped = !timeStopped;
    btnStopTime.textContent = timeStopped ? "Resume" : "Pause";
});

let chartVisible = true;
btnToggleChart?.addEventListener("click", () => {
    chartVisible = !chartVisible;
    const chartContainer = document.getElementById("chart-container");
    if (chartContainer) chartContainer.style.display = chartVisible ? "block" : "none";
    btnToggleChart.textContent = chartVisible ? "Hide Chart" : "Show Chart";
});

btnToggleWheel?.addEventListener("click", () => {
    wheelVisible = !wheelVisible;
    viewer.setWheelVisible(wheelVisible);
    btnToggleWheel.textContent = wheelVisible ? "Hide Wheel" : "Show Wheel";
});

function getRockerAxis(): Vector {
    return new Vector(K.position.x - J.position.x, K.position.y - J.position.y, K.position.z - J.position.z).normalize();
}

const frontView = {
    contactPatch: { x: 0, y: 0 } as Vec2, rollCenter: { x: 0, y: 0.5 } as Vec2, distRCtoIC: 0.8,
    xChassisUpper: -0.3, xChassisLower: -0.3, xChassisTieRod: -0.1,
};

function computeFrontViewGeometry() {
    const input: SuspensionInput = {
        contactPatch: frontView.contactPatch, rollCenter: frontView.rollCenter, distRCtoIC: frontView.distRCtoIC,
        upperUpright: { x: E.position.y, y: E.position.z }, lowerUpright: { x: O.position.y, y: O.position.z },
        tieRodOuter: { x: F.position.y, y: F.position.z },
        xChassisUpper: C.position.y, xChassisLower: A.position.y, xChassisTieRod: T.position.y,
    };
    return computeSuspensionGeometry(input);
}

// Visual Lines
viewer.addLine(new Line(O.index, B.index));
viewer.addLine(new Line(A.index, O.index));
viewer.addLine(new Line(C.index, E.index));
viewer.addLine(new Line(D.index, E.index));
viewer.addLine(new Line(O.index, E.index));

viewer.addLine(new Line(F.index, T.index));
viewer.addLine(new Line(O.index, F.index)); 
viewer.addLine(new Line(E.index, F.index)); 

// FIX: Visually anchor the Pushrod so it doesn't look like it's floating!
viewer.addLine(new Line(O.index, H.index)); 
viewer.addLine(new Line(E.index, H.index)); 

viewer.addLine(new Line(H.index, I.index));
viewer.addLine(new Line(I.index, K.index));
viewer.addLine(new Line(J.index, K.index));
viewer.addLine(new Line(M.index, K.index));
viewer.addLine(new Line(L.index, M.index));

type Vec3 = { x: number; y: number; z: number };
const springRate = 80000; 

function distance(a: Vec3, b: Vec3) {
    const dx=b.x-a.x, dy=b.y-a.y, dz=b.z-a.z;
    return Math.sqrt(dx*dx+dy*dy+dz*dz);
}

const geometry = {
    Lf:{...A.position}, Lr:{...B.position}, Uf:{...C.position}, Ur:{...D.position},
    Tc:{...T.position}, Ic:{...I.position}, Hc:{...H.position}, Jc:{...J.position},
    Kc:{...K.position}, Lc:{...L.position}, Mc:{...M.position},

    lowerFront:distance(A.position,O.position), lowerRear:distance(B.position,O.position),
    upperFront:distance(C.position,E.position), upperRear:distance(D.position,E.position),
    upright:distance(O.position,E.position), tie:distance(F.position,T.position),

    F_relative_to_O:distance(F.position,O.position), F_relative_to_E:distance(F.position,E.position),
    pushrod:distance(H.position,I.position), H_relative_to_O:distance(H.position,O.position),
    H_relative_to_E:distance(H.position,E.position), H_relative_to_F:distance(H.position,F.position), 

    rockerPushrod:distance(I.position,K.position), rockerBase:distance(K.position,M.position),
    rockerDamper:distance(I.position,M.position),
};

function updateGeometryFromPoints() {
    geometry.Lf={...A.position}; geometry.Lr={...B.position}; geometry.Uf={...C.position}; geometry.Ur={...D.position};
    geometry.Tc={...T.position}; geometry.Ic={...I.position}; geometry.Hc={...H.position}; geometry.Jc={...J.position};
    geometry.Kc={...K.position}; geometry.Lc={...L.position}; geometry.Mc={...M.position};
    
    geometry.lowerFront=distance(A.position,O.position); geometry.lowerRear=distance(B.position,O.position);
    geometry.upperFront=distance(C.position,E.position); geometry.upperRear=distance(D.position,E.position);
    geometry.upright=distance(O.position,E.position); geometry.tie=distance(F.position,T.position);
    geometry.F_relative_to_O=distance(F.position,O.position); geometry.F_relative_to_E=distance(F.position,E.position);
    geometry.pushrod=distance(H.position,I.position); geometry.H_relative_to_O=distance(H.position,O.position);
    geometry.H_relative_to_E=distance(H.position,E.position); geometry.H_relative_to_F=distance(H.position,F.position);
    geometry.rockerPushrod=distance(I.position,K.position); geometry.rockerBase=distance(K.position,M.position);
    geometry.rockerDamper=distance(I.position,M.position);
}

let O0={...O.position}; let E0={...E.position}; let F0={...F.position};

let staticKPI = Math.atan2(E0.y - O0.y, E0.z - O0.z) * (180 / Math.PI);
let staticToe = Math.atan2(F0.y - O0.y, F0.x - O0.x) * (180 / Math.PI);

const staticBase = {
    O: { ...O.position }, E: { ...E.position }, F: { ...F.position },
    H: { ...H.position }, I: { ...I.position }, M: { ...M.position }
};

function resetToPureStatic() {
    Object.assign(O.position, staticBase.O); Object.assign(E.position, staticBase.E); Object.assign(F.position, staticBase.F);
    Object.assign(H.position, staticBase.H); Object.assign(I.position, staticBase.I); Object.assign(M.position, staticBase.M);
}

function updatePureStatic() {
    staticBase.O = { ...O.position }; staticBase.E = { ...E.position }; staticBase.F = { ...F.position }; 
    staticBase.H = { ...H.position }; staticBase.I = { ...I.position }; staticBase.M = { ...M.position };
    O0 = { ...O.position }; E0 = { ...E.position }; F0 = { ...F.position };
    staticKPI = Math.atan2(E0.y - O0.y, E0.z - O0.z) * (180 / Math.PI);
    staticToe = Math.atan2(F0.y - O0.y, F0.x - O0.x) * (180 / Math.PI);
}

let wheelReference = (O.position.z + E.position.z) * 0.5;
let damperReference = distance(L.position, M.position);

let prevWheel = 0; let prevDamper = 0; let currentMR = 0; 

function solveSuspensionWithRocker(travel:number){
    Object.assign(A.position,geometry.Lf); Object.assign(B.position,geometry.Lr);
    Object.assign(C.position,geometry.Uf); Object.assign(D.position,geometry.Ur);
    Object.assign(T.position,geometry.Tc); Object.assign(J.position,geometry.Jc);
    Object.assign(K.position,geometry.Kc); Object.assign(L.position,geometry.Lc);

    O.position.z = staticBase.O.z + travel;
    E.position.z = staticBase.E.z + travel;
    F.position.z = staticBase.F.z + travel;
    H.position.z = staticBase.H.z + travel;

    for(let i=0; i<120; i++){
        // 1. Chassis Constraints
        pull3D(A.position, O.position, geometry.lowerFront);
        pull3D(B.position, O.position, geometry.lowerRear);
        pull3D(C.position, E.position, geometry.upperFront);
        pull3D(D.position, E.position, geometry.upperRear);
        pull3D(T.position, F.position, geometry.tie);

        // 2. Rocker Network
        pullTogether3D(H.position, I.position, geometry.pushrod);
        pull3D(K.position, I.position, geometry.rockerPushrod); 
        pull3D(K.position, M.position, geometry.rockerBase);    
        pullTogether3D(I.position, M.position, geometry.rockerDamper);

        const axis = getRockerAxis();
        projectToPlane(I.position, staticBase.I, axis);
        projectToPlane(M.position, staticBase.M, axis);

        // FIX: Upright Rigidity - use pull3D so anchor stays fixed and only H moves
        pullTogether3D(O.position, E.position, geometry.upright);
        pull3D(O.position, F.position, geometry.F_relative_to_O);
        pull3D(E.position, F.position, geometry.F_relative_to_E);
        pull3D(O.position, H.position, geometry.H_relative_to_O);
        pull3D(E.position, H.position, geometry.H_relative_to_E);
        pull3D(F.position, H.position, geometry.H_relative_to_F); 

        // Driver
        O.position.z = staticBase.O.z + travel;
    }
}

function pullTogether3D(a:Vec3, b:Vec3, target:number) {
    const dx = b.x - a.x, dy = b.y - a.y, dz = b.z - a.z;
    const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
    if (dist === 0) return;
    const err = (dist - target) * 0.5;
    const nx = dx / dist, ny = dy / dist, nz = dz / dist;
    a.x += nx * err; a.y += ny * err; a.z += nz * err;
    b.x -= nx * err; b.y -= ny * err; b.z -= nz * err;
}

function pull3D(a:Vec3, b:Vec3, target:number){
    const dx = b.x - a.x, dy = b.y - a.y, dz = b.z - a.z;
    const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
    if(dist === 0) return;
    const err = dist - target;
    const nx = dx / dist, ny = dy / dist, nz = dz / dist;
    b.x -= nx * err; b.y -= ny * err; b.z -= nz * err;
}

function projectToPlane(point:Vec3, origin:Vec3, normal:Vector){
    const dx = point.x - origin.x, dy = point.y - origin.y, dz = point.z - origin.z;
    const dist = dx * normal.x + dy * normal.y + dz * normal.z;
    point.x -= dist * normal.x; point.y -= dist * normal.y; point.z -= dist * normal.z;
}

const speedChartCanvas=document.getElementById("speed-chart") as HTMLCanvasElement;
const speedChart=new SpeedChart(speedChartCanvas);

speedChart.addDataset("Camber Gain"); speedChart.addDataset("Toe Change");
speedChart.addDataset("Damper compression"); speedChart.addDataset("Motion ratio");
speedChart.addDataset("Wheel rate");

interface PointCoord { point: { position: { x: number; y: number; z: number } }; name: string; }
const editablePoints: PointCoord[] = [
    { point: O, name: "O (Upright Lower)" }, { point: E, name: "E (Upright Upper)" },
    { point: A, name: "A (Lower Front)" }, { point: B, name: "B (Lower Rear)" },
    { point: C, name: "C (Upper Front)" }, { point: D, name: "D (Upper Rear)" },
    { point: F, name: "F (Tie Rod Hub)" }, { point: T, name: "T (Tie Rod Chassis)" },
    { point: H, name: "H (Pushrod Hub)" }, { point: I, name: "I (Pushrod Rocker)" },
    { point: J, name: "J (Rocker Axis)" }, { point: K, name: "K (Rocker Pivot)" },
    { point: L, name: "L (Damper Chassis)" }, { point: M, name: "M (Damper Rocker)" },
];

function populateValuesTable() {
    const tbody = document.querySelector("#values-table tbody") as HTMLTableSectionElement;
    tbody.innerHTML = "";
    
    editablePoints.forEach(item => {
        const row = document.createElement("tr");
        const shortName = item.name.split(" ")[0];
        row.innerHTML = `
            <td><span class="point-name">${shortName}</span><span class="point-desc">${item.name.split("(")[1]?.replace(")", "") || ""}</span></td>
            <td>
                <div style="display: flex; gap: 4px; align-items: center; margin-bottom: 2px;">
                    <span style="color: var(--text-muted); font-size: 10px; width: 12px;">X</span>
                    <input type="number" step="0.001" data-point="${item.name}" data-coord="x" value="${(item.point.position.x * 100).toFixed(2)}">
                </div>
                <div style="display: flex; gap: 4px; align-items: center; margin-bottom: 2px;">
                    <span style="color: var(--text-muted); font-size: 10px; width: 12px;">Y</span>
                    <input type="number" step="0.001" data-point="${item.name}" data-coord="y" value="${(item.point.position.y * 100).toFixed(2)}">
                </div>
                <div style="display: flex; gap: 4px; align-items: center;">
                    <span style="color: var(--text-muted); font-size: 10px; width: 12px;">Z</span>
                    <input type="number" step="0.001" data-point="${item.name}" data-coord="z" value="${(item.point.position.z * 100).toFixed(2)}">
                </div>
            </td>
        `;
        tbody.appendChild(row);
    });

    const frontRow = document.createElement("tr");
    frontRow.innerHTML = `<td colspan="2" style="padding: 10px 4px; background: var(--bg-tertiary); font-weight: 600; color: var(--text-secondary); font-size: 10px; text-transform: uppercase; letter-spacing: 0.3px;">Front View (2D)</td>`;
    tbody.appendChild(frontRow);

    const frontParams = [
        { key: "rollCenterY", label: "Roll Center Y", get: () => frontView.rollCenter.y, set: (v: number) => { frontView.rollCenter.y = v; } },
        { key: "distRCtoIC", label: "RC to IC Distance", get: () => frontView.distRCtoIC, set: (v: number) => { frontView.distRCtoIC = v; } },
        { key: "xChassisUpper", label: "Chassis Upper X", get: () => frontView.xChassisUpper, set: (v: number) => { frontView.xChassisUpper = v; } },
        { key: "xChassisLower", label: "Chassis Lower X", get: () => frontView.xChassisLower, set: (v: number) => { frontView.xChassisLower = v; } },
    ];

    frontParams.forEach(param => {
        const row = document.createElement("tr");
        row.innerHTML = `<td style="color: var(--text-secondary);">${param.label}</td><td><input type="number" step="0.01" data-front="${param.key}" value="${param.get().toFixed(3)}"></td>`;
        tbody.appendChild(row);
    });

    tbody.querySelectorAll("input").forEach(input => {
        input.addEventListener("change", (e) => {
            const target = e.target as HTMLInputElement;
            if (target.dataset.point) {
                const coord = target.dataset.coord as "x" | "y" | "z";
                const value = parseFloat(target.value) / 100;
                const pointItem = editablePoints.find(p => p.name === target.dataset.point);
                if (pointItem) {
                    resetToPureStatic(); pointItem.point.position[coord] = value;
                    updateGeometryFromPoints(); updatePureStatic();
                    wheelReference = (O.position.z + E.position.z) * 0.5;
                    damperReference = distance(L.position, M.position);
                }
            }
            if (target.dataset.front) {
                const param = frontParams.find(p => p.key === target.dataset.front);
                if (param) param.set(parseFloat(target.value));
            }
        });
    });
}
populateValuesTable();

interface DataRecord {
    time: number; travel: number; camber: number; toe: number;
    damperCompression: number; motionRatio: number; wheelRate: number;
    points: { O: Vec3; E: Vec3; A: Vec3; B: Vec3; C: Vec3; D: Vec3; F: Vec3; T: Vec3; H: Vec3; I: Vec3; J: Vec3; K: Vec3; L: Vec3; M: Vec3; };
}
let isRecording = false; const dataRecords: DataRecord[] = [];
const btnRecordStart = document.getElementById("btn-record-start") as HTMLButtonElement;
const btnRecordStop = document.getElementById("btn-record-stop") as HTMLButtonElement;
const btnRecordClear = document.getElementById("btn-record-clear") as HTMLButtonElement;
const btnRecordDownload = document.getElementById("btn-record-download") as HTMLButtonElement;
const recordCountSpan = document.getElementById("record-count") as HTMLSpanElement;
const databaseTableBody = document.querySelector("#database-table tbody") as HTMLTableSectionElement;

function addDataRecord(time: number, travel: number, camber: number, toe: number, damperCompression: number, motionRatio: number, wheelRate: number) {
    const record: DataRecord = {
        time, travel, camber, toe, damperCompression, motionRatio, wheelRate,
        points: {
            O: { ...O.position }, E: { ...E.position }, A: { ...A.position }, B: { ...B.position }, C: { ...C.position }, D: { ...D.position },
            F: { ...F.position }, T: { ...T.position }, H: { ...H.position }, I: { ...I.position }, J: { ...J.position }, K: { ...K.position },
            L: { ...L.position }, M: { ...M.position },
        },
    };
    dataRecords.push(record);
    if (dataRecords.length % 10 === 0) updateDatabaseTable();
    recordCountSpan.textContent = dataRecords.length.toString();
}

function updateDatabaseTable() {
    databaseTableBody.innerHTML = "";
    dataRecords.slice(-20).forEach(record => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${record.time.toFixed(2)}</td><td class="data-value">${(record.travel * 100).toFixed(1)}</td><td class="data-value">${(record.camber * 100).toFixed(2)}</td><td class="data-value">${(record.damperCompression * 100).toFixed(2)}</td>`;
        databaseTableBody.appendChild(row);
    });
    databaseTableBody.parentElement?.scrollTo(0, databaseTableBody.parentElement?.scrollHeight ?? 0);
}

function downloadCSV() {
    if (dataRecords.length === 0) return;
    let csv = "time,travel,camber,toe,damperCompression,motionRatio,wheelRate,";
    const pointNames = ["O", "E", "A", "B", "C", "D", "F", "T", "H", "I", "J", "K", "L", "M"];
    const coords = ["x", "y", "z"];
    pointNames.forEach(name => { coords.forEach(coord => csv += `${name}_${coord},`); });
    csv = csv.slice(0, -1) + "\n";
    dataRecords.forEach(record => {
        csv += `${record.time},${record.travel},${record.camber},${record.toe},${record.damperCompression},${record.motionRatio},${record.wheelRate},`;
        pointNames.forEach(name => {
            const point = record.points[name as keyof typeof record.points];
            coords.forEach(coord => csv += `${point[coord as keyof Vec3]},`);
        });
        csv = csv.slice(0, -1) + "\n";
    });
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = `suspension_data_${Date.now()}.csv`; a.click(); URL.revokeObjectURL(url);
}

btnRecordStart.addEventListener("click", () => { isRecording = true; btnRecordStart.disabled = true; btnRecordStop.disabled = false; });
btnRecordStop.addEventListener("click", () => { isRecording = false; btnRecordStart.disabled = false; btnRecordStop.disabled = true; });
btnRecordClear.addEventListener("click", () => { dataRecords.length = 0; databaseTableBody.innerHTML = ""; recordCountSpan.textContent = "0"; });
btnRecordDownload.addEventListener("click", downloadCSV);

function openModal(id: string) { const m = document.getElementById(id); if (m) m.classList.add('active'); }
function closeModal(id: string) { const m = document.getElementById(id); if (m) m.classList.remove('active'); }
function closeAllModals() { document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active')); }

function initGeometryTools() {
    document.querySelectorAll('.modal-overlay').forEach(overlay => { overlay.addEventListener('click', (e) => { if (e.target === overlay) closeAllModals(); }); });
    document.querySelectorAll('.modal-close, [data-action="cancel"]').forEach(btn => { btn.addEventListener('click', () => closeAllModals()); });

    document.getElementById("btn-anti-dive")?.addEventListener("click", () => { resetToPureStatic(); openModal('modal-anti-dive'); });

    document.getElementById('btn-apply-anti-dive')?.addEventListener('click', (e) => {
        e.preventDefault();

        const mode = (document.getElementById('anti-dive-mode') as HTMLSelectElement)?.value as 'anti-dive' | 'anti-squat';
        const wheelbase = parseFloat((document.getElementById('anti-dive-wheelbase') as HTMLInputElement)?.value || '1550') / 100;
        const cgHeight = parseFloat((document.getElementById('anti-dive-cg-height') as HTMLInputElement)?.value || '330') / 100;
        const brakeBias = parseFloat((document.getElementById('anti-dive-brake-bias') as HTMLInputElement)?.value || '0.55');
        const driveBias = parseFloat((document.getElementById('anti-dive-drive-bias') as HTMLInputElement)?.value || '0.55');
        const targetAntiDive = parseFloat((document.getElementById('anti-dive-target') as HTMLInputElement)?.value || '50');
        const targetAntiSquat = parseFloat((document.getElementById('anti-dive-squat') as HTMLInputElement)?.value || '60');
        
        const yChassisUpperMM = parseFloat((document.getElementById('anti-dive-y-upper') as HTMLInputElement)?.value || '245');
        const yChassisLowerMM = parseFloat((document.getElementById('anti-dive-y-lower') as HTMLInputElement)?.value || '150');
        const spanUpperMM = parseFloat((document.getElementById('anti-dive-span-upper') as HTMLInputElement)?.value || '100');
        const spanLowerMM = parseFloat((document.getElementById('anti-dive-span-lower') as HTMLInputElement)?.value || '100');
        
        const contactPatchX = (E.position.x + O.position.x) * 0.5;
        const contactPatchZ = ((O.position.z + E.position.z) * 0.5) - WHEEL_RADIUS;

        const antiDiveParams = {
            wheelbase, cgHeight, brakeBias, driveBias, targetAntiDive, targetAntiSquat, mode, 
            rcHeight: frontView.rollCenter.y,
            distanceRCtoIC: frontView.distRCtoIC,
            contactPatchX, contactPatchZ,
            uprightUpperJoint: { x: E.position.x, y: E.position.y, z: E.position.z },
            uprightLowerJoint: { x: O.position.x, y: O.position.y, z: O.position.z },
            uprightTieRodJoint: { x: F.position.x, y: F.position.y, z: F.position.z },
            zChassisUpperRef: E.position.z, zChassisLowerRef: O.position.z, zChassisTieRodRef: F.position.z,
            yChassisUpper: yChassisUpperMM / 100, yChassisLower: yChassisLowerMM / 100,
            spanUpperFront: spanUpperMM / 100, spanUpperRear: spanUpperMM / 100,
            spanLowerFront: spanLowerMM / 100, spanLowerRear: spanLowerMM / 100,
            tieRodInnerX: T.position.x 
        };

        const result = computeAntiDiveGeometry(antiDiveParams);
        resetToPureStatic();

        A.position.x = spanLowerMM / 100; A.position.y = yChassisLowerMM / 100; A.position.z = result.chassisLowerFront.z;
        B.position.x = -spanLowerMM / 100; B.position.y = yChassisLowerMM / 100; B.position.z = result.chassisLowerRear.z;
        C.position.x = spanUpperMM / 100; C.position.y = yChassisUpperMM / 100; C.position.z = result.chassisUpperFront.z;
        D.position.x = -spanUpperMM / 100; D.position.y = yChassisUpperMM / 100; D.position.z = result.chassisUpperRear.z;

        if (result.tieRodInnerX !== undefined && result.tieRodInnerZ !== undefined) {
            T.position.x = result.tieRodInnerX; T.position.z = result.tieRodInnerZ;
        }

        updateGeometryFromPoints(); updatePureStatic(); populateValuesTable();

        const svicXEl = document.getElementById('result-svic-x');
        const svicZEl = document.getElementById('result-svic-z');
        const upperSlopeEl = document.getElementById('result-upper-slope');
        const lowerSlopeEl = document.getElementById('result-lower-slope');
        if (svicXEl) svicXEl.textContent = `${(result.svicX * 100).toFixed(1)} mm`;
        if (svicZEl) svicZEl.textContent = `${(result.svicZ * 100).toFixed(1)} mm`;
        if (upperSlopeEl) upperSlopeEl.textContent = `${(result.upperArmSlope * 180 / Math.PI).toFixed(2)}°`;
        if (lowerSlopeEl) lowerSlopeEl.textContent = `${(result.lowerArmSlope * 180 / Math.PI).toFixed(2)}°`;
        
        closeModal('modal-anti-dive');
    });

    document.getElementById("btn-optimize-toe")?.addEventListener("click", () => { resetToPureStatic(); openModal('modal-optimize-toe'); });

    document.getElementById('btn-run-toe-optimize')?.addEventListener('click', (e) => {
        e.preventDefault(); // FIX: STOP PAGE RELOAD!
        const heaveRange = parseFloat((document.getElementById('toe-heave-range') as HTMLInputElement)?.value || '30');
        const config: ToeOptimizerConfig = {
            chassisUpperFront: { x: C.position.x, y: C.position.y, z: C.position.z },
            chassisUpperRear: { x: D.position.x, y: D.position.y, z: D.position.z },
            chassisLowerFront: { x: A.position.x, y: A.position.y, z: A.position.z },
            chassisLowerRear: { x: B.position.x, y: B.position.y, z: B.position.z },
            uprightUpperJoint: { x: E.position.x, y: E.position.y, z: E.position.z },
            uprightLowerJoint: { x: O.position.x, y: O.position.y, z: O.position.z },
            tieRodOuter: { x: F.position.x, y: F.position.y, z: F.position.z },
            staticWheelCenter: { x: (O.position.x + E.position.x)*0.5, y: O.position.y + 0.5, z: (O.position.z + E.position.z)*0.5 },
            heaveRange: heaveRange / 1000
        };
        const result = optimizeToe(config);
        resetToPureStatic();

        T.position.x = result.optimizedTieRodInner.x; T.position.y = result.optimizedTieRodInner.y; T.position.z = result.optimizedTieRodInner.z;
        updateGeometryFromPoints(); updatePureStatic(); populateValuesTable();
        const variationEl = document.getElementById('toe-variation');
        if (variationEl) variationEl.textContent = result.toeVariation.toFixed(2);
        closeModal('modal-optimize-toe');
    });

    document.getElementById("btn-calculate-actuation")?.addEventListener("click", () => { resetToPureStatic(); openModal('modal-actuation'); });

   document.getElementById('btn-calculate-actuation-apply')?.addEventListener('click', (e) => {
        e.preventDefault(); 
        const desiredMR = parseFloat((document.getElementById('actuation-desired-mr') as HTMLInputElement)?.value || '1.0');
        
        const actuationResult = computeActuationPoints(
            { x: O.position.x, y: O.position.y, z: O.position.z }, 
            { x: E.position.x, y: E.position.y, z: E.position.z },
            { x: K.position.x, y: K.position.y, z: K.position.z }, 
            { x: M.position.x, y: M.position.y, z: M.position.z },
            { x: L.position.x, y: L.position.y, z: L.position.z }, 
            { x: I.position.x, y: I.position.y, z: I.position.z }, // NEW: Pass current I
            desiredMR
        );

        resetToPureStatic();
        
        // 1. Lock H precisely onto the Kingpin Axis
        H.position.x = actuationResult.uprightPoint.x; 
        H.position.y = actuationResult.uprightPoint.y; 
        H.position.z = actuationResult.uprightPoint.z;

        // 2. Set I to hit the exact lever ratio
        I.position.x = actuationResult.rockerPoint.x;
        I.position.y = actuationResult.rockerPoint.y;
        I.position.z = actuationResult.rockerPoint.z;

        // 3. Set J so the rocker swings strictly inside the new plane
        J.position.x = actuationResult.rockerAxisPoint.x;
        J.position.y = actuationResult.rockerAxisPoint.y;
        J.position.z = actuationResult.rockerAxisPoint.z;

        updateGeometryFromPoints(); 
        updatePureStatic(); 
        populateValuesTable();

        const currentMREl = document.getElementById('actuation-current-mr');
        const pushrodXEl = document.getElementById('actuation-pushrod-x');
        const pushrodZEl = document.getElementById('actuation-pushrod-z');
        
        if (currentMREl) currentMREl.textContent = actuationResult.currentMR.toFixed(3);
        if (pushrodXEl) pushrodXEl.textContent = `${(H.position.x * 100).toFixed(1)} cm`;
        if (pushrodZEl) pushrodZEl.textContent = `${(H.position.z * 100).toFixed(1)} cm`;
        closeModal('modal-actuation');
    });

    // Snapshot Database using IndexedDB
    interface Snapshot {
        id?: number;
        name: string;
        points: { [key: string]: { x: number; y: number; z: number } };
        createdAt: Date;
    }

    let db: IDBDatabase | null = null;
    const DB_NAME = "SuspensionSimDB";
    const DB_VERSION = 1;
    const STORE_NAME = "snapshots";

    const snapshotCountSpan = document.getElementById("snapshot-count") as HTMLSpanElement;

    function initDatabase(): Promise<IDBDatabase> {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(DB_NAME, DB_VERSION);

            request.onerror = () => reject(request.error);

            request.onsuccess = () => {
                db = request.result;
                resolve(db);
            };

            request.onupgradeneeded = (event) => {
                const database = (event.target as IDBOpenDBRequest).result;
                if (!database.objectStoreNames.contains(STORE_NAME)) {
                    const store = database.createObjectStore(STORE_NAME, { keyPath: "id", autoIncrement: true });
                    store.createIndex("name", "name", { unique: false });
                    store.createIndex("createdAt", "createdAt", { unique: false });
                }
            };
        });
    }

    function getAllSnapshots(): Promise<Snapshot[]> {
        return new Promise((resolve, reject) => {
            if (!db) { resolve([]); return; }
            const tx = db.transaction(STORE_NAME, "readonly");
            const store = tx.objectStore(STORE_NAME);
            const request = store.getAll();
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    }

    function addSnapshot(snapshot: Omit<Snapshot, "id">): Promise<number> {
        return new Promise((resolve, reject) => {
            if (!db) { reject(new Error("Database not initialized")); return; }
            const tx = db.transaction(STORE_NAME, "readwrite");
            const store = tx.objectStore(STORE_NAME);
            const request = store.add(snapshot);
            request.onsuccess = () => resolve(request.result as number);
            request.onerror = () => reject(request.error);
        });
    }

    function deleteSnapshot(id: number): Promise<void> {
        return new Promise((resolve, reject) => {
            if (!db) { reject(new Error("Database not initialized")); return; }
            const tx = db.transaction(STORE_NAME, "readwrite");
            const store = tx.objectStore(STORE_NAME);
            const request = store.delete(id);
            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
    }

    async function saveSnapshot() {
        const name = prompt("Enter snapshot name:", `Snapshot ${Date.now()}`);
        if (!name) return;

        const snapshot: Omit<Snapshot, "id"> = {
            name,
            points: {
                A: { x: A.position.x, y: A.position.y, z: A.position.z },
                B: { x: B.position.x, y: B.position.y, z: B.position.z },
                C: { x: C.position.x, y: C.position.y, z: C.position.z },
                D: { x: D.position.x, y: D.position.y, z: D.position.z },
                E: { x: E.position.x, y: E.position.y, z: E.position.z },
                F: { x: F.position.x, y: F.position.y, z: F.position.z },
                H: { x: H.position.x, y: H.position.y, z: H.position.z },
                I: { x: I.position.x, y: I.position.y, z: I.position.z },
                J: { x: J.position.x, y: J.position.y, z: J.position.z },
                K: { x: K.position.x, y: K.position.y, z: K.position.z },
                L: { x: L.position.x, y: L.position.y, z: L.position.z },
                M: { x: M.position.x, y: M.position.y, z: M.position.z },
                O: { x: O.position.x, y: O.position.y, z: O.position.z },
                T: { x: T.position.x, y: T.position.y, z: T.position.z },
            },
            createdAt: new Date()
        };

        await addSnapshot(snapshot);
        await refreshSnapshotCount();
    }

    function loadSnapshotById(id: number, snapshots: Snapshot[]) {
        const s = snapshots.find(snap => snap.id === id);
        if (!s) return;
        Object.assign(A.position, s.points.A);
        Object.assign(B.position, s.points.B);
        Object.assign(C.position, s.points.C);
        Object.assign(D.position, s.points.D);
        Object.assign(E.position, s.points.E);
        Object.assign(F.position, s.points.F);
        Object.assign(H.position, s.points.H);
        Object.assign(I.position, s.points.I);
        Object.assign(J.position, s.points.J);
        Object.assign(K.position, s.points.K);
        Object.assign(L.position, s.points.L);
        Object.assign(M.position, s.points.M);
        Object.assign(O.position, s.points.O);
        Object.assign(T.position, s.points.T);
        updateGeometryFromPoints();
        updatePureStatic();
        populateValuesTable();
    }

    async function deleteSnapshotById(id: number) {
        await deleteSnapshot(id);
        await refreshSnapshotCount();
    }

    async function refreshSnapshotCount() {
        const snapshots = await getAllSnapshots();
        if (snapshotCountSpan) snapshotCountSpan.textContent = snapshots.length.toString();
    }

    async function showSnapshotManager() {
        const snapshots = await getAllSnapshots();
        if (snapshots.length === 0) {
            alert("No snapshots saved yet.");
            return;
        }

        const list = snapshots.map((s, i) => {
            const date = s.createdAt ? new Date(s.createdAt).toLocaleString() : "Unknown";
            return `${i + 1}. ${s.name} (${date})`;
        }).join("\n");

        const choice = prompt(`Saved Snapshots:\n${list}\n\nEnter number to load, or 'delete N' to remove a snapshot:`);

        if (!choice) return;

        if (choice.toLowerCase().startsWith("delete ")) {
            const num = parseInt(choice.split(" ")[1]) - 1;
            if (!isNaN(num) && snapshots[num]) {
                await deleteSnapshotById(snapshots[num].id!);
                showSnapshotManager();
            }
            return;
        }

        const index = parseInt(choice) - 1;
        if (!isNaN(index) && snapshots[index]) {
            loadSnapshotById(snapshots[index].id!, snapshots);
        }
    }

    // Initialize database and load snapshot count
    initDatabase().then(() => refreshSnapshotCount()).catch(console.error);

    document.getElementById("btn-save-snapshot")?.addEventListener("click", saveSnapshot);
    document.getElementById("btn-load-snapshots")?.addEventListener("click", showSnapshotManager);
}

function animate(){
    const t = Date.now() * 0.001;
    let travel = 0;
    if (!timeStopped) travel = Math.sin(t * 2) * 0.75;

    solveSuspensionWithRocker(travel);
    frontView.contactPatch = { x: O.position.y, y: O.position.z };

    const damperLength = distance(L.position, M.position);
    const damperCompression = damperReference - damperLength;
    const wheelCenterZ = (O.position.z + E.position.z) * 0.5;
    const wheelTravel = wheelCenterZ - wheelReference;

    const dWheel = wheelTravel - prevWheel;
    const dDamper = damperCompression - prevDamper;
    
    const currentPushrodZ = H.position.z; 
    const dPushrodZ = currentPushrodZ - prevPushrodZ;


    if (Math.abs(dPushrodZ) > 0.001) {
        currentMR = Math.abs(dDamper / dPushrodZ); 
    }

    prevPushrodZ = currentPushrodZ;
    prevDamper = damperCompression;

    const wheelRate = springRate * (currentMR * currentMR);
    
    const dy = E.position.y - O.position.y;
    const dz = E.position.z - O.position.z;
    const camber = (Math.atan2(dy, dz) * (180 / Math.PI)) - staticKPI;

    const dxF = F.position.x - O.position.x;
    const dyF = F.position.y - O.position.y;
    const toe = (Math.atan2(dyF, dxF) * (180 / Math.PI)) - staticToe;

    speedChart.addValue("Camber Gain", camber); // Exact degrees
    speedChart.addValue("Toe Change", toe);     // Exact degrees
    speedChart.addValue("Damper compression", damperCompression * 100); // Exact millimeters
    speedChart.addValue("Motion ratio", currentMR); // Exact ratio (e.g. 1.05)
    speedChart.addValue("Wheel rate", wheelRate / 1000); // N/mm

    if (isRecording && !timeStopped) {
        addDataRecord(t, travel, camber, toe, damperCompression, currentMR, wheelRate);
    }
    if (!timeStopped) speedChart.update();

    // FIX: Position wheel to realistically mount to the spindle (offset outboard from the ball joints)
    if (wheelVisible) {
        const wheelPos = new THREE.Vector3();
        const spindleX = (O.position.x + E.position.x) * 0.5;
        const spindleZ = (O.position.z + E.position.z) * 0.5;
        const spindleY = Math.max(O.position.y, E.position.y) + 0.8; // Set 80mm Outboard from the hub 
        
        wheelPos.set(spindleX, spindleY, spindleZ);
        viewer.updateWheelPosition(wheelPos);
    }

    viewer.update();
    requestAnimationFrame(animate);
}

initGeometryTools();
requestAnimationFrame(animate);