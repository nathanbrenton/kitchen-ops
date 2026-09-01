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
  servingProfiles: [
    {
      servings: 1,
      ingredients: [
        {
          ingredient: water,
          quantity: 1,
          unit: "cup",
        },
        {
          ingredient: salt,
          quantity: 0.25,
          unit: "teaspoon",
        },
        {
          ingredient: oats,
          quantity: 0.5,
          unit: "cup",
        },
      ],
      tools: [
        {
          tool: twoCupGlassMeasuringCup
        },
      ],
    }
  ],
};
