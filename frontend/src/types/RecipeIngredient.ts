import type { Ingredient } from "./Ingredient";
import type { IngredientForm } from "./IngredientForm";
import type { IngredientVariety } from "./IngredientVariety";

export type RecipeIngredient = {
  ingredient: Ingredient;
  form?: IngredientForm;
  variety?: IngredientVariety;
  quantity: number;
  unit: string;
};
