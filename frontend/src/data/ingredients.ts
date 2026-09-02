import type { Ingredient } from "../types/Ingredient";
import { pantry } from "./ingredientStorageLocations";
import { oatsAirtightJar } from "./storageContainers";

import {
  grainsAndCereals,
  mineralIngredients,
} from "./ingredientFoodGroups";

import { celticSeaSalt } from "./ingredientVarieties";

import {
  charcoalFiltered,
  distilled,
} from "./ingredientProcessingMethods";

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
  attributes: [],
  varieties: [],
  recommendedProcessingMethods: [
    distilled,
    charcoalFiltered,
  ],
  storageProfiles: [],
};

export const salt: Ingredient = {
  id: 2,
  title: "Salt",
  description: "A mineral seasoning used to enhance flavor.",
  foodGroups: [mineralIngredients],
  forms: [],
  attributes: [],
  varieties: [
    celticSeaSalt,
  ],
  recommendedProcessingMethods: [],
  storageProfiles: [],
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
  attributes: [],
  varieties: [],
  recommendedProcessingMethods: [],
  storageProfiles: [
    {
      location: pantry,
      storageContainer: oatsAirtightJar,
    },
  ],
};
