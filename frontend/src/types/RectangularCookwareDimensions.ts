import type { LengthMeasurement } from "./LengthMeasurement";
import type { MeasurementValue } from "./MeasurementValue";


// TypeScript: this type alias defines the rectangular member
// of the CookwareDimensions discriminated union.
//
// KitchenOps domain model: rectangular cookware is described by
// length × width, with height included when known.
export type RectangularCookwareDimensions = {
  shape: "rectangular";

  length: MeasurementValue<LengthMeasurement>;
  width: MeasurementValue<LengthMeasurement>;

  // TypeScript: optional property that may contain either an
  // exact measurement or a measurement range.
  height?: MeasurementValue<LengthMeasurement>;
};
