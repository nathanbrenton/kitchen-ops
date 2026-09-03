// TypeScript: this file contains a string-literal union type declaration.
//
// A union type uses "|" to restrict a value to ONE of several allowed types.
// Here, each member is a specific string-literal type.
//
// KitchenOps domain model: this records how a recipe relates to its
// culinary origin or source material.
//
// Examples:
// - Oatmeal -> "traditional"
// - Independently developed recipe -> "original"
// - Restaurant recreation -> "recreated-from"
// - Modified published recipe -> "adapted-from"
export type RecipeProvenanceRelationship =
  | "original"
  | "traditional"
  | "common-method"
  | "inspired-by"
  | "recreated-from"
  | "adapted-from";
