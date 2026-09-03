// TypeScript: this file contains a type alias declaration.
// A type alias declaration gives a reusable name to another type.
//
// KitchenOps domain model: this object type describes the desired
// amount of an ingredient to keep available in kitchen inventory.


// TypeScript: this is a type-only import used for static type checking.
// Measurement is a union type that allows volume, mass, or count
// measurements while excluding unrelated values such as temperature.
import type { Measurement } from "./Measurement";


// TypeScript: this type alias declaration defines an object type
// for one ingredient inventory policy.
//
// KitchenOps domain model: rather than storing a number and unit
// separately, the recommended quantity uses the shared measurement system.
//
// Examples:
// - 2 pounds of oats
// - 1 gallon of water
// - 6 individual avocados
export type IngredientInventoryPolicy = {
  recommendedOnHandMeasurement: Measurement;
};
