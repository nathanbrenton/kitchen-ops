import type { Ingredient } from "../types/Ingredient";

import {
  grainsAndCereals,
  mineralIngredients,
} from "./ingredientFoodGroups";

import {
  rolled,
  steelCut,
} from "./ingredientForms";


export const water: Ingredient = {
  id: 1,
  title: "Water",
  description: "Water used for cooking and food preparation.",
  foodGroups: [],
  forms: [],
};

export const salt: Ingredient = {
  id: 2,
  title: "Salt",
  description: "A mineral seasoning used to enhance flavor.",
  foodGroups: [mineralIngredients],
  forms: [],
};

export const oats: Ingredient = {
  id: 3,
  title: "Oats",
  description: "A whole grain commonly cooked into oatmeal.",
  foodGroups: [grainsAndCereals],
  forms: [
    rolled,
    steelCut,
  ],
};
