// This is a DATA MODULE file.
//
// TypeScript: this module creates concrete object values that conform
// to the StorageContainer type alias declaration.
//
// KitchenOps domain model: these objects represent reusable ingredient-
// storage containers. Private ownership/manufacturer details would belong
// in a separate private inventory layer if we ever need them.


// TypeScript: this is a type-only import.
// It is used for static type checking and does not create a
// runtime JavaScript dependency.
import type { StorageContainer } from "../types/StorageContainer";


// ============================================================
// AIRTIGHT OATS JAR
// ============================================================

// TypeScript: this object literal is statically checked against the
// StorageContainer type alias declaration.
//
// TypeScript: capacity is now a nested VolumeMeasurement object,
// using the shared VolumeMeasurements object shape.
//
// Culinary / food storage:
// an airtight container helps protect dry oats from moisture,
// contamination, and pantry exposure.
export const oatsAirtightJar: StorageContainer = {
  id: 1,
  title: "1.5-Liter Airtight Jar",
  description: "An airtight 1.5-liter jar used for dry pantry storage.",
  photoUrl: null,

  category: "storage-container",
  type: "jar",

  airtight: true,

  capacity: {
    quantity: 1.5,
    unit: "liter",
  },
};
