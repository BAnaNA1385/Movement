import type { Point3D } from "./GeometryTools.js";

export interface ToeOptimizerConfig {
    chassisUpperFront: Point3D;
    chassisUpperRear: Point3D;
    chassisLowerFront: Point3D;
    chassisLowerRear: Point3D;
    uprightUpperJoint: Point3D;
    uprightLowerJoint: Point3D;
    tieRodOuter: Point3D;
    staticWheelCenter: Point3D;
    heaveRange: number;
}

export interface ToeOptimizationResult {
    optimizedTieRodInner: Point3D;
    toeVariation: number;
    toeValues: number[];
}

// --- Basic Vector Math Helpers ---
function dist(p1: Point3D, p2: Point3D): number {
    return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2 + (p1.z - p2.z) ** 2);
}

function pullTogether(p1: Point3D, p2: Point3D, targetDist: number): [Point3D, Point3D] {
    const dx = p2.x - p1.x, dy = p2.y - p1.y, dz = p2.z - p1.z;
    const currentDist = Math.sqrt(dx * dx + dy * dy + dz * dz);
    if (currentDist === 0) return [{ ...p1 }, { ...p2 }];
    
    const diff = (currentDist - targetDist) / currentDist;
    const offsetX = dx * 0.5 * diff, offsetY = dy * 0.5 * diff, offsetZ = dz * 0.5 * diff;
    
    return [
        { x: p1.x + offsetX, y: p1.y + offsetY, z: p1.z + offsetZ },
        { x: p2.x - offsetX, y: p2.y - offsetY, z: p2.z - offsetZ }
    ];
}

function satisfyDistance(p: Point3D, anchor: Point3D, targetDist: number): Point3D {
    const dx = p.x - anchor.x, dy = p.y - anchor.y, dz = p.z - anchor.z;
    const currentDist = Math.sqrt(dx * dx + dy * dy + dz * dz);
    if (currentDist === 0) return { ...p };
    
    const ratio = targetDist / currentDist;
    return { x: anchor.x + dx * ratio, y: anchor.y + dy * ratio, z: anchor.z + dz * ratio };
}

export function optimizeToe(config: ToeOptimizerConfig): ToeOptimizationResult {
    const heaveRange = config.heaveRange;

    // Track a virtual point F directly ahead of the wheel to read pure steering angle
    const staticF: Point3D = { 
        x: config.staticWheelCenter.x + 1.00, // 100mm Forward
        y: config.staticWheelCenter.y, 
        z: config.staticWheelCenter.z 
    };

    // 1. Rigid Upright Distances
    const d_ul = dist(config.uprightUpperJoint, config.uprightLowerJoint);
    const d_ut = dist(config.uprightUpperJoint, config.tieRodOuter);
    const d_uw = dist(config.uprightUpperJoint, config.staticWheelCenter);
    const d_uf = dist(config.uprightUpperJoint, staticF);
    
    const d_lt = dist(config.uprightLowerJoint, config.tieRodOuter);
    const d_lw = dist(config.uprightLowerJoint, config.staticWheelCenter);
    const d_lf = dist(config.uprightLowerJoint, staticF);
    
    const d_tw = dist(config.tieRodOuter, config.staticWheelCenter);
    const d_tf = dist(config.tieRodOuter, staticF);
    const d_wf = dist(config.staticWheelCenter, staticF);

    // 2. Wishbone Swing Radii
    const d_u_uf = dist(config.uprightUpperJoint, config.chassisUpperFront);
    const d_u_ur = dist(config.uprightUpperJoint, config.chassisUpperRear);
    const d_l_lf = dist(config.uprightLowerJoint, config.chassisLowerFront);
    const d_l_lr = dist(config.uprightLowerJoint, config.chassisLowerRear);

    // Objective Function: Evaluates the bump steer curve (Optimized to only return score)
    function evaluateToeCurve(testTieRodInner: Point3D): number {
        const trLength = dist(testTieRodInner, config.tieRodOuter);
        const toeValues: number[] = [];
        
        const steps = 10;
        const stepSize = (heaveRange * 2) / steps;

        for (let heave = -heaveRange; heave <= heaveRange; heave += stepSize) {
            let u = { ...config.uprightUpperJoint }; u.z += heave;
            let l = { ...config.uprightLowerJoint }; l.z += heave;
            let t = { ...config.tieRodOuter }; t.z += heave;
            let w = { ...config.staticWheelCenter }; w.z += heave;
            let f = { ...staticF }; f.z += heave;

            for (let iter = 0; iter < 60; iter++) {
                u = satisfyDistance(u, config.chassisUpperFront, d_u_uf);
                u = satisfyDistance(u, config.chassisUpperRear, d_u_ur);
                l = satisfyDistance(l, config.chassisLowerFront, d_l_lf);
                l = satisfyDistance(l, config.chassisLowerRear, d_l_lr);

                t = satisfyDistance(t, testTieRodInner, trLength);

                w.z = config.staticWheelCenter.z + heave;

                [u, l] = pullTogether(u, l, d_ul);
                [u, t] = pullTogether(u, t, d_ut);
                [u, w] = pullTogether(u, w, d_uw);
                [u, f] = pullTogether(u, f, d_uf);
                [l, t] = pullTogether(l, t, d_lt);
                [l, w] = pullTogether(l, w, d_lw);
                [l, f] = pullTogether(l, f, d_lf);
                [t, w] = pullTogether(t, w, d_tw);
                [t, f] = pullTogether(t, f, d_tf);
                [w, f] = pullTogether(w, f, d_wf);
            }

            const toeAngle = Math.atan2(f.y - w.y, f.x - w.x) * (180 / Math.PI);
            toeValues.push(toeAngle);
        }

        const peakToPeak = Math.max(...toeValues) - Math.min(...toeValues);
        const rms = Math.sqrt(toeValues.reduce((sum, v) => sum + (v - toeValues[0]) ** 2, 0) / toeValues.length);
        
        // Return heavily weighted score
        return (peakToPeak * 100) + (rms * 10);
    }

    // --- UPGRADED: 26-Direction Pattern Search with Momentum and Guardrail ---
    
    // Generate all 26 vectors surrounding a 3D point (edges, faces, and corners)
    const searchDirections: Point3D[] = [];
    for (let dx of [-1, 0, 1]) {
        for (let dy of [-1, 0, 1]) {
            for (let dz of [-1, 0, 1]) {
                if (dx === 0 && dy === 0 && dz === 0) continue;
                const len = Math.sqrt(dx*dx + dy*dy + dz*dz);
                searchDirections.push({ x: dx/len, y: dy/len, z: dz/len });
            }
        }
    }

    // Seed the search at a reasonable starting rack location
    let currentPoint: Point3D = { 
        x: config.chassisLowerFront.x, 
        y: config.chassisLowerFront.y, 
        z: config.tieRodOuter.z 
    };
    
    let currentBestScore = evaluateToeCurve(currentPoint);
    let stepSize = 0.05; // 5mm initial scan radius
    const minStepSize = 0.0001; // Terminate when changes are microscopic (0.01mm)
    const maxIterations = 5000;
    
    for (let iter = 0; iter < maxIterations; iter++) {
        // Break early if we've drilled down to the microscopic limit
        if (stepSize < minStepSize) break;

        let localBestScore = currentBestScore;
        let localBestPoint = { ...currentPoint };
        let foundBetterPoint = false;
        
        // Scan the 3D sphere around the current point
        for (const dir of searchDirections) {
            const testPoint = {
                x: currentPoint.x + (dir.x * stepSize),
                y: currentPoint.y + (dir.y * stepSize),
                z: currentPoint.z + (dir.z * stepSize)
            };
            
            const testScore = evaluateToeCurve(testPoint);
            
            // STRICT CHECK: Is this specific test point better than EVERYTHING else we've seen this loop?
            if (testScore < localBestScore) {
                localBestScore = testScore;
                localBestPoint = testPoint;
                foundBetterPoint = true;
            }
        }
        
        // THE GUARDRAIL: Only move the actual steering rack if we found a true improvement
        if (foundBetterPoint && localBestScore < currentBestScore) {
            currentPoint = { ...localBestPoint };
            currentBestScore = localBestScore;
            
            // MOMENTUM: Accelerate down the valley
            stepSize *= 1.1; 
        } else {
            // FAILURE: We hit the bottom of the current valley resolution. Shrink the scan sphere.
            stepSize *= 0.5;
        }
    }

    // --- FINAL EVALUATION ---
    // Now that we have the mathematically perfect coordinate, calculate the actual degree array once
    const finalToeValues: number[] = [];
    const trLength = dist(currentPoint, config.tieRodOuter);
    const steps = 30;
    const heaveStepSize = (heaveRange * 2) / steps;

    for (let heave = -heaveRange; heave <= heaveRange; heave += heaveStepSize) {
        let u = { ...config.uprightUpperJoint }; u.z += heave;
        let l = { ...config.uprightLowerJoint }; l.z += heave;
        let t = { ...config.tieRodOuter }; t.z += heave;
        let w = { ...config.staticWheelCenter }; w.z += heave;
        let f = { ...staticF }; f.z += heave;

        for (let iter = 0; iter < 60; iter++) {
            u = satisfyDistance(u, config.chassisUpperFront, d_u_uf);
            u = satisfyDistance(u, config.chassisUpperRear, d_u_ur);
            l = satisfyDistance(l, config.chassisLowerFront, d_l_lf);
            l = satisfyDistance(l, config.chassisLowerRear, d_l_lr);
            t = satisfyDistance(t, currentPoint, trLength);
            w.z = config.staticWheelCenter.z + heave;

            [u, l] = pullTogether(u, l, d_ul);
            [u, t] = pullTogether(u, t, d_ut);
            [u, w] = pullTogether(u, w, d_uw);
            [u, f] = pullTogether(u, f, d_uf);
            [l, t] = pullTogether(l, t, d_lt);
            [l, w] = pullTogether(l, w, d_lw);
            [l, f] = pullTogether(l, f, d_lf);
            [t, w] = pullTogether(t, w, d_tw);
            [t, f] = pullTogether(t, f, d_tf);
            [w, f] = pullTogether(w, f, d_wf);
        }
        const toeAngle = Math.atan2(f.y - w.y, f.x - w.x) * (180 / Math.PI);
        finalToeValues.push(toeAngle);
    }

    return {
        optimizedTieRodInner: currentPoint,
        toeVariation: (Math.max(...finalToeValues) - Math.min(...finalToeValues)),
        toeValues: finalToeValues
    };
}