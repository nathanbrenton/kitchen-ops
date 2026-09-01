import type { IngredientFoodGroup } from "./IngredientFoodGroup";
import type { IngredientForm } from "./IngredientForm";

export type Ingredient = {
  id: number;
  title: string;
  description: string;
  foodGroups: IngredientFoodGroup[];
  forms: IngredientForm[];
};
