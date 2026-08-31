import type { RecipeIngredient } from "./RecipeIngredient";
import type { RecipeTool } from "./RecipeTool"

export type Recipe = {
  id: number;
  title: string;
  description: string;
  servings: number;
  ingredients: RecipeIngredient[];
  tools: RecipeTool[];
};
