// TypeScript: this imports the approved unit vocabulary for length measurements.
import type { LengthUnit } from "./LengthUnits";


// TypeScript: this object keeps a numeric quantity together with its unit.
//
// Culinary: this can describe cookware dimensions such as:
// - 12 centimeters in diameter
// - 8 centimeters in height
// - 2.5 millimeters in wall thickness
export type LengthMeasurement = {
  quantity: number;
  unit: LengthUnit;
};
