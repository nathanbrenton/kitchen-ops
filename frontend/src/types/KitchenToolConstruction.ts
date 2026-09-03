// TypeScript: this file contains a type alias declaration.
// A type alias declaration gives a reusable name to another type.
//
// KitchenOps domain model: this object type represents structured
// construction metadata for one privately owned kitchen tool.


// TypeScript: these are type-only imports.
// They are used for static type checking and do not create
// runtime JavaScript dependencies.

import type { KitchenToolConstructionLayer } from "./KitchenToolConstructionLayer";
import type { KitchenToolMaterialName } from "./KitchenToolMaterialNames";
import type { LengthMeasurement } from "./LengthMeasurement";


// TypeScript: this type alias declaration defines an object type
// for private kitchen-tool construction metadata.
//
// KitchenOps domain model: the structure supports both:
//
// 1. simple construction
//    Example: a copper lid with a stainless-steel handle.
//
// 2. layered construction
//    Example: copper / aluminum / stainless-steel cookware.
export type KitchenToolConstruction = {
  // TypeScript: "?" marks this as an optional property.
  //
  // KitchenOps domain model: use bodyMaterial when the item has a
  // useful primary material but does not need a multilayer description.
  bodyMaterial?: KitchenToolMaterialName;

  // TypeScript: optional property containing a LengthMeasurement object.
  totalThickness?: LengthMeasurement;

  // TypeScript: KitchenToolConstructionLayer[] is an array type.
  //
  // The property itself is optional because simple tools such as
  // a lid may not need a layered-construction model.
  layers?: KitchenToolConstructionLayer[];

  // TypeScript: optional property restricted to values from the
  // KitchenToolMaterialName string-literal union type.
  handleMaterial?: KitchenToolMaterialName;

  // TypeScript: optional free-form string property.
  notes?: string;
};
