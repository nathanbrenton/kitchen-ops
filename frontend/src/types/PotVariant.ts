import type { CookwareDimensions } from "./CookwareDimensions";
import type { MeasurementValue } from "./MeasurementValue";
import type { VolumeMeasurement } from "./VolumeMeasurement";


// TypeScript: this type alias defines the object type for one pot variant.
//
// KitchenOps domain model: pot capacity and dimensions may be exact,
// ranged, incomplete, or a combination of those.
export type PotVariant = {
  capacity?: MeasurementValue<VolumeMeasurement>;
  dimensions?: CookwareDimensions;
};
