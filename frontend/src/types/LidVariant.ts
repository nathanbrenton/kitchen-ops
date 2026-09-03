// TypeScript: this is a type-only import.
// It is used for static type checking and does not create
// a runtime JavaScript dependency.
import type { LengthMeasurement } from "./LengthMeasurement";


// TypeScript: this type alias defines the object shape
// for one physical lid variant.
//
// Culinary: public lid compatibility is based primarily on nominal diameter.
// A 12 cm lid is therefore nominally compatible with round cookware
// whose relevant opening/rim diameter is also 12 cm.
//
// Important:
// matching nominal diameter means "nominally compatible", not guaranteed fit.
// Private inventory can later record exact confirmed-fit relationships.
export type LidVariant = {
  nominalDiameter: LengthMeasurement;
};
