// TypeScript: these are type-only imports used for static type checking.
import type { LengthMeasurement } from "./LengthMeasurement";
import type { MeasurementValue } from "./MeasurementValue";


// TypeScript: this type alias defines an object type.
//
// TypeScript: shape: "round" is a string-literal discriminator.
// It allows this object to participate in the CookwareDimensions
// discriminated union.
//
// KitchenOps domain model: round cookware is primarily described
// using diameter and, when known, height.
export type RoundCookwareDimensions = {
  shape: "round";

  // TypeScript: MeasurementValue<LengthMeasurement> is a generic
  // union type. It permits either one exact LengthMeasurement
  // or a MeasurementRange<LengthMeasurement>.
  diameter: MeasurementValue<LengthMeasurement>;

  // TypeScript: "?" marks height as an optional property.
  height?: MeasurementValue<LengthMeasurement>;
};
