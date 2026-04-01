export interface Vec2 {
    x: number;
    y: number;
}

export interface SuspensionInput {
    contactPatch: Vec2;
    rollCenter: Vec2;
    distRCtoIC: number;
    upperUpright: Vec2;
    lowerUpright: Vec2;
    tieRodOuter: Vec2;        // ADDED: Required for steering geometry
    xChassisUpper: number;
    xChassisLower: number;
    xChassisTieRod: number;  // ADDED: Lateral location of the steering rack inner pivot
}

export interface SuspensionResult {
    ic: Vec2;
    chassisUpper: Vec2;
    chassisLower: Vec2;
    tieRodInner: Vec2;       // FIXED: Will now output the actual coordinated point
    upperArmSlope: number;
    lowerArmSlope: number;
}

export function normalizeVector2D(v: Vec2): Vec2 {
    const len = Math.sqrt(v.x * v.x + v.y * v.y);
    if (len === 0) return { x: 0, y: 0 };
    return { x: v.x / len, y: v.y / len };
}

export function distance2D(a: Vec2, b: Vec2): number {
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    return Math.sqrt(dx * dx + dy * dy);
}

export function lineSlope(p1: Vec2, p2: Vec2): number | null {
    const dx = p2.x - p1.x;
    if (Math.abs(dx) < 1e-10) return null;
    return (p2.y - p1.y) / dx;
}

export function lineYAtX(slope: number | null, point: Vec2, x: number): number | null {
    if (slope === null) return null;
    return slope * (x - point.x) + point.y;
}

export function lineIntersection(
    p1: Vec2,
    slope1: number | null,
    p2: Vec2,
    slope2: number | null
): Vec2 | null {
    if (slope1 === null && slope2 === null) return null;
    
    if (slope1 === null) {
        const y = lineYAtX(slope2, p2, p1.x);
        return y !== null ? { x: p1.x, y } : null;
    }
    
    if (slope2 === null) {
        const y = lineYAtX(slope1, p1, p2.x);
        return y !== null ? { x: p2.x, y } : null;
    }

    if (Math.abs(slope1 - slope2) < 1e-10) return null;

    const x = (slope2 * p2.x - slope1 * p1.x + p1.y - p2.y) / (slope2 - slope1);
    const y = slope1 * (x - p1.x) + p1.y;

    return { x, y };
}

export function computeInstantCenter(input: SuspensionInput): Vec2 {
    const vec = {
        x: input.rollCenter.x - input.contactPatch.x,
        y: input.rollCenter.y - input.contactPatch.y,
    };
    
    const unit = normalizeVector2D(vec);
    
    return {
        // A note on convention: if distRCtoIC is positive, IC sits further past the vehicle centerline.
        x: input.rollCenter.x + unit.x * input.distRCtoIC,
        y: input.rollCenter.y + unit.y * input.distRCtoIC,
    };
}

export function computeChassisPickups(input: SuspensionInput, ic: Vec2): { upper: Vec2; lower: Vec2; tieRod: Vec2 } {
    const upperSlope = lineSlope(input.upperUpright, ic);
    const lowerSlope = lineSlope(input.lowerUpright, ic);
    
    // Calculate steering arm tie-rod line to the IC
    const tieRodSlope = lineSlope(input.tieRodOuter, ic);

    const upperY = lineYAtX(upperSlope, input.upperUpright, input.xChassisUpper);
    const lowerY = lineYAtX(lowerSlope, input.lowerUpright, input.xChassisLower);
    
    // Calculate exact height of steering rack clevis for zero bump steer
    const tieRodY = lineYAtX(tieRodSlope, input.tieRodOuter, input.xChassisTieRod);

    return {
        upper: { x: input.xChassisUpper, y: upperY ?? input.upperUpright.y },
        lower: { x: input.xChassisLower, y: lowerY ?? input.lowerUpright.y },
        tieRod: { x: input.xChassisTieRod, y: tieRodY ?? input.tieRodOuter.y },
    };
}

export function computeSuspensionGeometry(input: SuspensionInput): SuspensionResult {
    const ic = computeInstantCenter(input);
    
    const chassisPickups = computeChassisPickups(input, ic);
    
    const upperArmSlope = lineSlope(input.upperUpright, ic) ?? 0;
    const lowerArmSlope = lineSlope(input.lowerUpright, ic) ?? 0;

    return {
        ic,
        chassisUpper: chassisPickups.upper,
        chassisLower: chassisPickups.lower,
        tieRodInner: chassisPickups.tieRod, // Value is now dynamically driven by the FVIC
        upperArmSlope,
        lowerArmSlope,
    };
}