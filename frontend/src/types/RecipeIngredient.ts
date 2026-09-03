// TypeScript: this file contains a type alias declaration.
// A type alias declaration gives a reusable name to another type.
//
// KitchenOps domain model: this object type represents one ingredient
// requirement inside a specific recipe serving profile.


// TypeScript: these are type-only imports used for static type checking.

import type { Ingredient } from "./Ingredient";
import type { IngredientForm } from "./IngredientForm";
import type { IngredientVariety } from "./IngredientVariety";
import type { Measurement } from "./Measurement";


// TypeScript: this type alias declaration defines an object type
// for one recipe-ingredient relationship.
//
// KitchenOps domain model:
// - ingredient identifies the reusable Ingredient entity.
// - form optionally specifies a required preparation/form, such as rolled oats.
// - variety optionally specifies a particular variety, such as Celtic sea salt.
// - measurement records the required quantity using the shared
//   KitchenOps measurement system.
export type RecipeIngredient = {
  ingredient: Ingredient;

  // TypeScript: "?" marks these as optional properties.
  form?: IngredientForm;
  variety?: IngredientVariety;

  // TypeScript: Measurement is a union type.
  // It allows volume, mass, or count measurements while excluding
  // unrelated measurement types such as temperature.
  measurement: Measurement;
};
