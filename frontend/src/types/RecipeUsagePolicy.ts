// TypeScript: this file contains type alias declarations.
//
// KitchenOps domain model: these object types describe how recipe
// rights/provenance metadata should be presented on downstream outputs.


// TypeScript: this is a type-only import used for static type checking.
import type { RecipeOutputSurface } from "./RecipeOutputSurfaces";


// TypeScript: this string-literal union type declaration restricts
// attribution detail to one of three supported presentation levels.
//
// KitchenOps domain model:
// - "none"    = do not render attribution on that surface
// - "compact" = short copyright/credit line
// - "full"    = complete provenance, source, and license information
export type RecipeAttributionDetail =
  | "none"
  | "compact"
  | "full";


// TypeScript: this type alias declaration defines an object type
// for one downstream presentation rule.
export type RecipeOutputPolicy = {
  surface: RecipeOutputSurface;
  attributionDetail: RecipeAttributionDetail;
};


// TypeScript: this type alias declaration defines an object type
// containing an array of RecipeOutputPolicy values.
//
// KitchenOps domain model: one recipe can specify different attribution
// behavior for web pages, PDFs, YouTube descriptions, and video graphics.
export type RecipeUsagePolicy = {
  outputs: RecipeOutputPolicy[];
};
