// TypeScript: these are type-only imports used for static type checking.
import type { KitchenToolMaterialName } from "./KitchenToolMaterialNames";
import type { LengthMeasurement } from "./LengthMeasurement";


// TypeScript: this is a string-literal union type definition.
//
// KitchenOps domain model: cookware may have an exterior layer,
// an internal/core layer, or an interior cooking-surface layer.
export type KitchenToolConstructionLayerPosition =
  | "exterior"
  | "core"
  | "interior";


// TypeScript: this type alias defines an object type describing
// one material layer within a piece of cookware.
//
// Example:
// copper exterior layer
// aluminum core layer
// stainless-steel interior layer
export type KitchenToolConstructionLayer = {
  material: KitchenToolMaterialName;
  position: KitchenToolConstructionLayerPosition;

  // TypeScript: "?" marks these as optional properties.
  // Some inventory sources provide exact thickness or percentages,
  // while others provide only the material itself.
  thickness?: LengthMeasurement;
  approximatePercentage?: number;

  // Inventory: useful for values such as "18/10" stainless steel.
  grade?: string;
};
