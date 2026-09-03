// TypeScript: this type-only import provides the allowed identifier
// vocabulary for static type checking.
import type { KitchenToolIdentifierKind } from "./KitchenToolIdentifierKinds";


// TypeScript: this type alias defines the object shape for one identifier.
//
// Inventory: using an array of identifier objects lets one owned tool
// preserve several valid manufacturer/catalog references without
// forcing them into a single ambiguous "sku" field.
export type KitchenToolIdentifier = {
  kind: KitchenToolIdentifierKind;
  value: string;

  // TypeScript: "?" marks label as an optional property.
  // It can preserve extra human-readable context when useful.
  label?: string;
};
