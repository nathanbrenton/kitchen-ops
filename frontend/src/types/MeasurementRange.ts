// TypeScript: this is a generic type alias.
//
// The type parameter <T> lets the same range structure work with
// different measurement object types, such as LengthMeasurement
// or VolumeMeasurement.
//
// KitchenOps domain model: this represents a known minimum and maximum
// without inventing a single falsely precise value.
export type MeasurementRange<T> = {
  minimum: T;
  maximum: T;
};
