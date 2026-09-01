import type { RecipeIngredient } from "./RecipeIngredient";
import type { RecipeTool } from "./RecipeTool";

export type RecipeServingProfile = {
  servings: number;
  ingredients: RecipeIngredient[];
  tools: RecipeTool[];
};
