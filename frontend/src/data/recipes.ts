import type { Recipe } from "../types/Recipe";
import { oats, salt, water } from "./ingredients";
import { 
  saucepan,
  twoCupGlassMeasuringCup,
} from "./cookingTools";

export const oatmeal: Recipe = {
  id: 1,
  title: "Oatmeal",
  description: "Simple stovetop oatmeal made with oats, water, and salt.",
  servings: 1,
  ingredients: [
    {
      ingredient: oats,
      quantity: 0.5,
      unit: "cup",
    },
    {
      ingredient: water,
      quantity: 1,
      unit: "cup",
    },
    {
      ingredient: salt,
      quantity: 0.125,
      unit: "teaspoon",
    },
  ],
  tools: [
    {
      tool: twoCupGlassMeasuringCup,
    },
    {
      tool: saucepan,
    },
  ],
};
