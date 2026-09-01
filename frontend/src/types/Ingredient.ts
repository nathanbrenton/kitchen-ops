import type { IngredientFoodGroup } from "./IngredientFoodGroup";

export type Ingredient = {
  id: number;
  title: string;
  description: string;
  foodGroups: IngredientFoodGroup[];
};
