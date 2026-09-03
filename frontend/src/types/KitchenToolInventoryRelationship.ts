// TypeScript: this is a type-only import used for static type checking.
import type {
  KitchenToolInventoryRelationshipKind,
} from "./KitchenToolInventoryRelationshipKinds";


// TypeScript: this type alias defines an object type.
//
// KitchenOps domain model: one object records a relationship between
// two specifically owned private-inventory items.
//
// We reference inventory IDs rather than embedding whole inventory
// objects. This avoids duplicating data and helps prevent circular
// object-reference problems.
export type KitchenToolInventoryRelationship = {
  id: number;

  // TypeScript: these number properties act as references to the
  // id fields of KitchenToolInventoryItem objects.
  itemId: number;
  relatedItemId: number;

  relationship: KitchenToolInventoryRelationshipKind;

  // TypeScript: "?" marks notes as an optional property.
  notes?: string;
};
