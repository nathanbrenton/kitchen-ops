// TypeScript: these are a generic type parameter and a union type definition.
//
// <T> is a generic type parameter. It lets this same type work with
// LengthMeasurement, VolumeMeasurement, MassMeasurement, and other
// measurement object types.
//
// "|" creates a union type: the value may be ONE exact measurement
// OR a MeasurementRange containing minimum and maximum measurements.

import type { MeasurementRange } from "./MeasurementRange";


// KitchenOps domain model: use this when a measurement may be known
// exactly or only as a documented range.
//
// Examples:
// exact:
//   20 cm
//
// range:
//   4.5–4.9 cm
export type MeasurementValue<T> =
  | T
  | MeasurementRange<T>;
