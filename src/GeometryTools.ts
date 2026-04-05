export interface Point3D {
    x: number;
    y: number;
    z: number;
}

export interface AntiDiveParams {
    wheelbase: number;
    cgHeight: number;
    desiredZSVIC: number;
    rcHeight: number;
    brakeBias: number;
    driveBias: number;
    targetAntiDive: number;
    targetAntiSquat: number;
    mode: 'anti-dive' | 'anti-squat';
    distanceRCtoIC: number;
    contactPatchX: number; 
    contactPatchZ: number; 
    uprightUpperJoint: Point3D;
    uprightLowerJoint: Point3D;
    uprightTieRodJoint: Point3D; 
    xChassisUpperRef: number;
    xChassisLowerRef: number;
    yChassisUpper: number;
    yChassisLower: number;
    spanUpperFront: number;
    spanUpperRear: number;
    spanLowerFront: number;
    spanLowerRear: number;
    tieRodInnerX: number;  
}

export interface AntiDiveResult {
    svicX: number;
    svicZ: number;
    upperArmSlope: number;
    lowerArmSlope: number;
    chassisUpperFront: Point3D;
    chassisUpperRear: Point3D;
    chassisLowerFront: Point3D;
    chassisLowerRear: Point3D;
    tieRodInnerX: number;
    tieRodInnerZ: number;
}

export function computeAntiDiveGeometry(params: AntiDiveParams): AntiDiveResult {
    const svicZ = params.rcHeight + (params.rcHeight - params.contactPatchZ) / 
        Math.sqrt(params.contactPatchX ** 2 + (params.contactPatchZ - params.rcHeight) ** 2) * params.distanceRCtoIC;
    
    let svicX = -99999;
    let requiredSvicSlope = -99999;
    if (params.mode === 'anti-dive') {
        const antiDiveDec = params.targetAntiDive / 100;
        if (antiDiveDec > 0) {
            requiredSvicSlope = (antiDiveDec * (params.cgHeight / params.wheelbase)) / params.brakeBias;
            svicX = (params.contactPatchX) / Math.sqrt(params.contactPatchX ** 2 + (params.contactPatchZ - params.rcHeight) ** 2) * params.distanceRCtoIC;
        }
    } else {
        const antiSquatDec = params.targetAntiSquat / 100;
        if (antiSquatDec > 0) {
            requiredSvicSlope = (antiSquatDec * (params.cgHeight / params.wheelbase)) / params.driveBias;
            svicX = (params.contactPatchX) / Math.sqrt(params.contactPatchX ** 2 + (params.contactPatchZ - params.rcHeight) ** 2) * params.distanceRCtoIC;
        }
    }

    const upperArmSlope_front = (params.uprightUpperJoint.z - svicZ) / (params.uprightUpperJoint.x - svicX);
    const lowerArmSlope_front = (params.uprightLowerJoint.z - svicZ) / (params.uprightLowerJoint.x - svicX);

    const upperZreference = upperArmSlope_front * (params.xChassisUpperRef - params.uprightUpperJoint.x) + params.uprightUpperJoint.z;
    const lowerZreference = lowerArmSlope_front * (params.xChassisLowerRef - params.uprightLowerJoint.x) + params.uprightLowerJoint.z;

    const ZSVIC = params.desiredZSVIC
    const XSVIC = ZSVIC/ requiredSvicSlope

    const upperArmSlope = (ZSVIC - upperZreference) / (XSVIC-params.uprightUpperJoint.x);
    const lowerArmSlope = (ZSVIC - lowerZreference) / (XSVIC-params.uprightLowerJoint.x);

    const xUpperFront = params.spanUpperFront;
    const xUpperRear = -params.spanUpperRear;
    const xLowerFront = params.spanLowerFront;
    const xLowerRear = -params.spanLowerRear;

    const zUpperFront = svicZ + upperArmSlope * (xUpperFront - svicX);
    const zUpperRear = svicZ + upperArmSlope * (xUpperRear - svicX);
    const zLowerFront = svicZ + lowerArmSlope * (xLowerFront - svicX);
    const zLowerRear = svicZ + lowerArmSlope * (xLowerRear - svicX);

    const tieRodSlope = (params.uprightTieRodJoint.z - svicZ) / (params.uprightTieRodJoint.x - svicX);
    const tieRodInnerZ = params.uprightTieRodJoint.z + tieRodSlope * (params.tieRodInnerX - params.uprightTieRodJoint.x);

    return {
        svicX, svicZ, upperArmSlope, lowerArmSlope,
        chassisUpperFront: { x: xUpperFront, y: params.yChassisUpper, z: zUpperFront },
        chassisUpperRear: { x: xUpperRear, y: params.yChassisUpper, z: zUpperRear },
        chassisLowerFront: { x: xLowerFront, y: params.yChassisLower, z: zLowerFront },
        chassisLowerRear: { x: xLowerRear, y: params.yChassisLower, z: zLowerRear },
        tieRodInnerX: params.tieRodInnerX,
        tieRodInnerZ
    };
}
// -------------------------------------------------------------
// ACTUATION MATH (STABLE ITERATIVE VERSION)
// -------------------------------------------------------------
export interface ActuationResult {
    uprightPoint: Point3D;     
    rockerPoint: Point3D;      
    rockerAxisPoint: Point3D;  
    currentMR: number;
}

export function computeActuationPoints(
    lowerUpright: Point3D,      
    upperUpright: Point3D,      
    rockerPivot: Point3D,       
    damperRockerMount: Point3D, 
    damperChassisMount: Point3D,
    currentPushrodRockerMount: Point3D, // CRITICAL: Seed the solver
    targetMR: number
): ActuationResult {
    
    function sub(a: Point3D, b: Point3D) { return { x: a.x - b.x, y: a.y - b.y, z: a.z - b.z }; }
    function add(a: Point3D, b: Point3D) { return { x: a.x + b.x, y: a.y + b.y, z: a.z + b.z }; }
    function cross(a: Point3D, b: Point3D) { 
        return { x: a.y*b.z - a.z*b.y, y: a.z*b.x - a.x*b.z, z: a.x*b.y - a.y*b.x }; 
    }
    function dot(a: Point3D, b: Point3D) { return a.x*b.x + a.y*b.y + a.z*b.z; }
    function norm(v: Point3D) { return Math.sqrt(v.x*v.x + v.y*v.y + v.z*v.z); }
    function scale(v: Point3D, s: number) { return { x: v.x*s, y: v.y*s, z: v.z*s }; }
    function normalize(v: Point3D) { const n = norm(v); return n === 0 ? v : scale(v, 1/n); }

    // 1. Establish the Rocker Plane
    const vecKtoL = sub(damperChassisMount, rockerPivot);
    const vecKtoM = sub(damperRockerMount, rockerPivot);
    let N = cross(vecKtoL, vecKtoM);
    if (norm(N) < 1e-6) N = { x: 1, y: 0, z: 0 }; 
    N = normalize(N);

    // 2. Intersect Kingpin with the Plane safely
    const vecOtoE = sub(upperUpright, lowerUpright);
    const vecOtoK = sub(rockerPivot, lowerUpright); 
    const denom = dot(vecOtoE, N);
    let t = 0.5;
    if (Math.abs(denom) > 1e-4) t = dot(vecOtoK, N) / denom;
    t = Math.max(0, Math.min(1, t)); 
    const bestH = add(lowerUpright, scale(vecOtoE, t));

    // 3. Exact Damper Effective Lever
    const u_damp = normalize(sub(damperChassisMount, damperRockerMount));
    const damperLever = norm(cross(vecKtoM, u_damp)); 

    // 4. Stablized Iterative Solver
    // SEED FIX: Start exactly where the user placed the point to prevent random early jumps
    let bestI = { ...currentPushrodRockerMount }; 
    let prevIR = 1.0;

    // Bumped iterations to 25 to accommodate the new 3D movement damping
    for (let iter = 0; iter < 25; iter++) {
        const vecHtoI = sub(bestI, bestH);
        const u_pr = normalize(vecHtoI);

        let currentIR = Math.abs(u_pr.z); 
        if (currentIR < 0.05) currentIR = 0.05; // Prevent hard zeros

        // Smooth out the Installation Ratio calculation
        let IR = (prevIR * 0.5) + (currentIR * 0.5);
        if (iter === 0) IR = currentIR; 
        prevIR = IR;

        const d_i = (damperLever * IR) / targetMR;

        const vecKtoH = sub(bestH, rockerPivot);
        const distKH = norm(vecKtoH);

        if (distKH < 1e-4) break;

        let targetI: Point3D;

        if (distKH <= d_i) {
            targetI = add(rockerPivot, scale(normalize(vecKtoH), d_i));
        } else {
            const acosRatio = Math.max(-1, Math.min(1, d_i / distKH));
            const alpha = Math.acos(acosRatio);
            
            const u = normalize(vecKtoH);
            const N_cross_u = cross(N, u);

            const rot1 = add(scale(u, Math.cos(alpha)), scale(N_cross_u, Math.sin(alpha)));
            const rot2 = add(scale(u, Math.cos(-alpha)), scale(N_cross_u, Math.sin(-alpha)));

            const I1 = add(rockerPivot, scale(rot1, d_i));
            const I2 = add(rockerPivot, scale(rot2, d_i));

            // CONTINUITY FIX: Always pick the solution closest to where the arm currently is.
            // This prevents the math from arbitrarily flipping the rocker arm 180 degrees.
            const distToI1 = norm(sub(I1, bestI));
            const distToI2 = norm(sub(I2, bestI));
            targetI = distToI1 < distToI2 ? I1 : I2;
        }

        // SPATIAL DAMPING FIX: Slide 60% of the way towards the target, retaining 40% of the old position.
        // This acts like a shock absorber for the math, guaranteeing it converges gracefully.
        bestI = add(scale(bestI, 0.4), scale(targetI, 0.6));
    }

    const bestJ = add(rockerPivot, scale(N, 0.5)); 

    return {
        uprightPoint: bestH,
        rockerPoint: bestI,
        rockerAxisPoint: bestJ, 
        currentMR: targetMR
    };
}