import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Point } from "./Point.js";
import { Vector } from "./Vector.js";
import { VectorPanel } from "./VectorPanel.js";
import type { Line } from "./Line.js";
import { COLORS } from "./constants.js";

export class GeometryViewer {
    private readonly scene: THREE.Scene;
    private readonly camera: THREE.PerspectiveCamera;
    private readonly renderer: THREE.WebGLRenderer;
    private readonly controls: OrbitControls;
    private readonly points: Point[] = [];
    private readonly lines: Line[] = [];
    private readonly vectorPanel: VectorPanel;

    private readonly pointMeshes: THREE.Mesh[] = [];
    private readonly lineMeshes: THREE.Mesh[] = [];
    private readonly guideLineMeshes: THREE.Mesh[] = [];
    private readonly arrowHelpers: THREE.ArrowHelper[] = [];

    private readonly pointPositions: THREE.Vector3[] = [];

    private wheelMesh: THREE.Mesh | null = null;
    private wheelVisible: boolean = true;

    private readonly LINE_DIAMETER = 0.04;
    private readonly POINT_DIAMETER = 0.12;

    constructor(container: HTMLElement) {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x1a1a2e);

        this.camera = new THREE.PerspectiveCamera(
            45,
            container.clientWidth / container.clientHeight,
            0.1,
            1000
        );
        this.camera.up.set(0, 0, 1);
        this.camera.position.set(-5, 0, 15);

        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(this.renderer.domElement);

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.minDistance = 1;
        this.controls.maxDistance = 50;
        this.controls.enablePan = true;
        this.controls.panSpeed = 0.5;
        this.controls.rotateSpeed = 0.8;
        this.controls.target.set(0, 4, 4);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        this.scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(10, 20, 10);
        this.scene.add(directionalLight);

        const gridHelper = new THREE.GridHelper(20, 20, 0x444444, 0x222222);
        gridHelper.rotation.x = Math.PI / 2;
        this.scene.add(gridHelper);

        this.vectorPanel = new VectorPanel(container);

        window.addEventListener("resize", () => {
            this.camera.aspect = container.clientWidth / container.clientHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(container.clientWidth, container.clientHeight);
        });
    }

    public addPoint(x: number, y: number, z: number, name: string): Point {
        const index = this.points.length;
        const color = COLORS[index % COLORS.length];
        const point = new Point(new Vector(x, y, z), color, name, index);
        this.points.push(point);

        const geometry = new THREE.SphereGeometry(this.POINT_DIAMETER, 32, 32);
        const material = new THREE.MeshStandardMaterial({ color });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);
        
        this.scene.add(mesh);
        this.pointMeshes.push(mesh);
        this.pointPositions.push(mesh.position);

        return point;
    }

    public addLine(line: Line): void {
        this.lines.push(line);

        const start = this.points[line.startIndex].position;
        const end = this.points[line.endIndex].position;

        const path = new THREE.LineCurve3(
            new THREE.Vector3(start.x, start.y, start.z),
            new THREE.Vector3(end.x, end.y, end.z)
        );
        const geometry = new THREE.TubeGeometry(path, 1, this.LINE_DIAMETER, 8, false);
        const material = new THREE.MeshStandardMaterial({ 
            color: 0x888888,
            roughness: 0.4,
            metalness: 0.6
        });
        
        const mesh = new THREE.Mesh(geometry, material);
        this.scene.add(mesh);
        this.lineMeshes.push(mesh);
    }

    public setCameraTarget(target: Vector): void {
        this.controls.target.set(target.x, target.y, target.z);
    }

    public getVectorPanel(): VectorPanel {
        return this.vectorPanel;
    }

    public setWheelVisible(visible: boolean): void {
        this.wheelVisible = visible;
        if (this.wheelMesh) {
            this.wheelMesh.visible = visible;
        }
    }

    public isWheelVisible(): boolean {
        return this.wheelVisible;
    }

    public createWheel(position: THREE.Vector3, radius: number): void {
        if (this.wheelMesh) {
            this.scene.remove(this.wheelMesh);
        }

        // Realistic Tube: 1.016 units = 101.6mm tube radius (203.2mm total tire width)
        const geometry = new THREE.TorusGeometry(radius, 1.016, 16, 32);
        
        // Rotate to stand upright and face the lateral Y-axis
        geometry.rotateX(Math.PI / 2);
        
        const material = new THREE.MeshStandardMaterial({
            color: 0x333333,
            roughness: 0.7,
            metalness: 0.3,
        });
        
        this.wheelMesh = new THREE.Mesh(geometry, material);
        this.wheelMesh.position.copy(position);
        this.wheelMesh.visible = this.wheelVisible;
        this.scene.add(this.wheelMesh);
    }

    public updateWheelPosition(position: THREE.Vector3): void {
        if (this.wheelMesh) {
            this.wheelMesh.position.copy(position);
        }
    }

    public update(): void {
        for (let i = 0; i < this.points.length; i++) {
            this.pointMeshes[i].position.copy(this.points[i].position.toVector3());
        }

        for (let i = 0; i < this.lines.length; i++) {
            const line = this.lines[i];
            const start = this.points[line.startIndex].position;
            const end = this.points[line.endIndex].position;

            const path = new THREE.LineCurve3(
                new THREE.Vector3(start.x, start.y, start.z),
                new THREE.Vector3(end.x, end.y, end.z)
            );
            
            this.lineMeshes[i].geometry.dispose();
            this.lineMeshes[i].geometry = new THREE.TubeGeometry(path, 1, this.LINE_DIAMETER, 8, false);
        }

        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }
}