// TypeScript: this file contains a type alias declaration.
//
// KitchenOps domain model: this object type represents one actual
// quantity of an ingredient currently present in kitchen inventory.


// TypeScript: these are type-only imports.
// They are used for static type checking and do not create
// runtime JavaScript dependencies.

import type { Ingredient } from "./Ingredient";
import type { IngredientStorageLocation } from "./IngredientStorageLocation";
import type { Measurement } from "./Measurement";
import type { StorageContainer } from "./StorageContainer";


// TypeScript: this type alias declaration defines an object type
// for one ingredient inventory item.
//
// KitchenOps domain model:
// - ingredient identifies what food item is present.
// - measurement records how much is present.
// - storageLocation records where it is stored.
// - storageContainer optionally records the specific storage vessel.
// - acquisition/opening dates can later help estimate shelf life.
export type InventoryItem = {
  id: number;

  ingredient: Ingredient;

  // TypeScript: Measurement is a union type.
  // The inventory quantity may therefore be represented by
  // volume, mass, or count depending on the ingredient.
  measurement: Measurement;

  storageLocation: IngredientStorageLocation;

  // TypeScript: "?" marks storageContainer as an optional property.
  storageContainer?: StorageContainer;

  // TypeScript: these are string properties for now.
  // KitchenOps currently expects ISO-style date strings such as YYYY-MM-DD.
  acquiredOn: string;

  // TypeScript: optional property because an inventory item
  // may still be unopened.
  openedOn?: string;
};
