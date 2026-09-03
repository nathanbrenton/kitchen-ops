// TypeScript: these are type-only imports.
// They contribute to compile-time type checking only.
import type { KitchenToolConstructionLayer } from "./KitchenToolConstructionLayer";
import type { KitchenToolMaterialName } from "./KitchenToolMaterialNames";
import type { LengthMeasurement } from "./LengthMeasurement";


// TypeScript: this type alias defines an object type for structured
// construction metadata associated with one privately owned tool.
//
// KitchenOps domain model: this belongs to private inventory.
// Public recipe output normally does not need to expose copper thickness,
// handle material, layer percentages, or similar ownership details.
export type KitchenToolConstruction = {
  // TypeScript: optional property.
  totalThickness?: LengthMeasurement;

  // TypeScript: KitchenToolConstructionLayer[] means
  // "an array of KitchenToolConstructionLayer objects."
  layers: KitchenToolConstructionLayer[];

  // Inventory: handle material is structurally separate from
  // the cookware body's layered construction.
  handleMaterial?: KitchenToolMaterialName;

  // TypeScript: optional free-form detail remains available for facts
  // that do not yet justify another dedicated domain property.
  notes?: string;
};
