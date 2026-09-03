// TypeScript: this file contains a type alias declaration.
// A type alias declaration gives a reusable name to another type.
//
// KitchenOps domain model: this object type represents the copyright,
// licensing, attribution, provenance, and downstream usage metadata
// associated with one recipe.


// TypeScript: these are type-only imports.
// They are used for static type checking and do not create
// runtime JavaScript dependencies.
import type { ContentLicense } from "./ContentLicenses";
import type { RecipeSourceAttribution } from "./RecipeSourceAttribution";
import type { RecipeUsagePolicy } from "./RecipeUsagePolicy";


// TypeScript: this type alias declaration defines an object type
// for recipe rights and attribution metadata.
//
// KitchenOps domain model:
// - copyrightHolder applies to original KitchenOps expression,
//   presentation, photography, video, and similar protectable material.
// - copyrightYear records the relevant copyright year.
// - license records the chosen content license when one has been selected.
// - sourceAttributions preserves culinary provenance and inspiration.
// - usagePolicy controls how much rights/provenance information is
//   displayed on downstream surfaces such as web, PDF, and video.
export type RecipeRights = {
  // TypeScript: "?" marks these properties as optional.
  copyrightHolder?: string;
  copyrightYear?: number;

  // TypeScript: optional property using the ContentLicense
  // string-literal union type.
  //
  // KitchenOps domain model: leaving this undefined means the content
  // licensing decision has not yet been recorded.
  license?: ContentLicense;

  // TypeScript: optional string property for a reusable
  // human-readable credit or rights statement.
  attributionText?: string;

  // TypeScript: RecipeSourceAttribution[] is an array type.
  //
  // KitchenOps domain model: one recipe may have zero, one,
  // or multiple provenance/inspiration records.
  sourceAttributions: RecipeSourceAttribution[];

  // TypeScript: optional property whose value must conform to the
  // RecipeUsagePolicy object type.
  //
  // KitchenOps domain model: downstream renderers can use this metadata
  // to decide how much rights/provenance information belongs on each surface.
  usagePolicy?: RecipeUsagePolicy;
};
