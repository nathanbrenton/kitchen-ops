// TypeScript: this is a string-literal union type definition.
// The "|" operator means an identifier kind must be ONE
// of these approved string values.
//
// Inventory: cookware can have several identifiers depending on
// manufacturer, market, catalog generation, or whether the identifier
// refers to a complete set or only the cookware body.
export type KitchenToolIdentifierKind =
  | "model"
  | "sku"
  | "item-number"
  | "catalog-reference"
  | "body-only-sku";
