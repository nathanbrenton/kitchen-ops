// TypeScript: this is a string-literal union type definition.
// The "|" operator means a material value must be ONE
// of the approved string literals.
//
// KitchenOps domain model: these are materials currently present
// in the owned cookware inventory. We can extend this union later
// when glass, silicone, wood, plastic, etc. become necessary.
export type KitchenToolMaterialName =
  | "aluminum"
  | "cast-iron"
  | "copper"
  | "stainless-steel";
