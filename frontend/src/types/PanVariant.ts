import type { CookwareDimensions } from "./CookwareDimensions";
import type { MeasurementValue } from "./MeasurementValue";
import type { VolumeMeasurement } from "./VolumeMeasurement";


// TypeScript: this type alias defines the object type for one pan variant.
//
// KitchenOps domain model: some pans are best identified by capacity,
// some by dimensions, and some by both.
export type PanVariant = {
  // TypeScript: optional property using a generic union type.
  // Capacity may be one exact VolumeMeasurement or a documented range.
  capacity?: MeasurementValue<VolumeMeasurement>;

  // TypeScript: optional property using the CookwareDimensions
  // discriminated-union type definition.
  dimensions?: CookwareDimensions;
};
