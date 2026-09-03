// TypeScript: this file contains a type alias declaration.
//
// KitchenOps domain model: Recipe represents one reusable recipe entry
// with manually defined serving profiles and optional rights/provenance data.


// TypeScript: these are type-only imports used for static type checking.
import type { RecipeRights } from "./RecipeRights";
import type { RecipeServingProfile } from "./RecipeServingProfile";


// TypeScript: this type alias declaration defines the object type
// required for every Recipe value.
export type Recipe = {
  id: number;
  title: string;
  description: string;

  // TypeScript: RecipeServingProfile[] is an array type.
  //
  // Culinary: serving profiles are entered explicitly because recipe
  // quantities and tool requirements do not always scale linearly.
  servingProfiles: RecipeServingProfile[];

  // TypeScript: "?" marks rights as an optional property.
  //
  // KitchenOps domain model: rights/provenance metadata can be added
  // progressively without making older recipe records invalid.
  rights?: RecipeRights;
};
