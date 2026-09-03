// TypeScript: this file contains a string-literal union type declaration.
//
// A union type uses "|" to restrict a value to ONE of the listed
// string-literal types.
//
// KitchenOps domain model: these values represent downstream places
// where recipe rights, attribution, and provenance may be rendered.
export type RecipeOutputSurface =
  | "web"
  | "pdf"
  | "youtube-description"
  | "video-end-credit"
  | "video-watermark";
