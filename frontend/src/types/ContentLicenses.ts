// TypeScript: this file contains a string-literal union type declaration.
//
// A union type uses "|" to restrict a value to ONE of several allowed types.
// Each member below is a specific string-literal type.
//
// KitchenOps domain model: this separates recipe/editorial/media licensing
// from the MIT license used by the KitchenOps software code.
//
// Important:
// these values describe content licensing only.
// They do not automatically apply to source code.
export type ContentLicense =
  | "all-rights-reserved"
  | "cc-by-4.0"
  | "cc-by-sa-4.0"
  | "cc-by-nc-4.0"
  | "cc-by-nc-sa-4.0"
  | "cc-by-nd-4.0"
  | "cc-by-nc-nd-4.0"
  | "custom";
