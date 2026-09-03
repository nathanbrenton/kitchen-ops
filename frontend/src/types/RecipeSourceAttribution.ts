// TypeScript: this file contains a type alias declaration.
// A type alias declaration gives a reusable name to another type.
//
// KitchenOps domain model: this object type represents one source,
// influence, adaptation source, recreation source, or traditional-origin
// note associated with a recipe.


// TypeScript: this is a type-only import.
// It is used for static type checking and does not create
// a runtime JavaScript dependency.
import type {
  RecipeProvenanceRelationship,
} from "./RecipeProvenanceRelationships";


// TypeScript: this type alias declaration defines an object type
// for one recipe-source attribution record.
//
// KitchenOps domain model: a recipe may have multiple attribution records.
// For example, one recipe could be inspired by one source while also
// borrowing a preparation technique from another source.
export type RecipeSourceAttribution = {
  // TypeScript: this required property uses the
  // RecipeProvenanceRelationship string-literal union type.
  relationship: RecipeProvenanceRelationship;

  // TypeScript: "?" marks the following properties as optional.
  //
  // KitchenOps domain model: traditional/common recipes may not have
  // one identifiable creator, publication, or URL.
  creator?: string;
  title?: string;
  publication?: string;
  url?: string;

  // KitchenOps domain model: useful for preserving context such as
  // "independently recreated through tasting and experimentation"
  // or "traditional preparation with no single identifiable source."
  notes?: string;
};
