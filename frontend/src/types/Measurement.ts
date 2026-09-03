import type { CountMeasurement } from "./CountMeasurement";
import type { MassMeasurement } from "./MassMeasurement";
import type { VolumeMeasurement } from "./VolumeMeasurement";

export type Measurement =
  | VolumeMeasurement
  | MassMeasurement
  | CountMeasurement;
