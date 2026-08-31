import type { Ingredient } from "./Ingredient";

export type RecipeIngredient = {
  ingredient: Ingredient;
  quantity: number;
  unit: string;
};
