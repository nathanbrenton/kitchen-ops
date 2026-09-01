//import type { RecipeIngredient } from "./RecipeIngredient";
//import type { RecipeTool } from "./RecipeTool"
import type { RecipeServingProfile } from "./RecipeServingProfile";

export type Recipe = {
  id: number;
  title: string;
  description: string;
  servingProfiles: RecipeServingProfile[];
};
