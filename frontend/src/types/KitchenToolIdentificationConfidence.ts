// TypeScript: this is a string-literal union type definition.
// The "|" operator means a value must be ONE of the listed strings.
//
// Inventory: some owned tools can be identified from a stamped SKU,
// while others may only be probable matches based on dimensions,
// construction, handles, and other physical evidence.
export type KitchenToolIdentificationConfidence =
  | "confirmed"
  | "strong-match"
  | "probable"
  | "unknown";
