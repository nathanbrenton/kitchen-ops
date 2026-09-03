// This is a DATA MODULE file.
//
// TypeScript: this file creates concrete Recipe objects from the reusable
// type definitions in src/types/.
//
// Culinary: each serving profile records the exact ingredients and tools
// needed for that serving size. Larger batches will be entered manually
// rather than assumed to scale linearly.


// IMPORTS

import type { Recipe } from "../types/Recipe";

import { oats, salt, water } from "./ingredients";
import { rolled } from "./ingredientForms";
import { celticSeaSalt } from "./ingredientVarieties";

import {
  measuringCupDry,
  measuringCupDryVariantHalfCup,
  measuringCupLiquid,
  measuringCupLiquidVariantOneCup,
  measuringSpoon,
  measuringSpoonVariantQuarterTeaspoon,
  saucepan,
  saucepanVariantPointNineQuart,
} from "./cookingTools";


// ============================================================
// OATMEAL
// ============================================================

// Culinary: basic oatmeal is a traditional/common preparation.
// KitchenOps is modeling this specific preparation, not claiming
// ownership of the underlying culinary concept.

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
          variety: celticSeaSalt,
          quantity: 0.25,
          unit: "teaspoon",
        },

        {
          ingredient: oats,
          form: rolled,
          quantity: 0.5,
          unit: "cup",
        },
      ],

      tools: [
        // Culinary: measure the water with a liquid measuring cup.
        {
          tool: measuringCupLiquid,
          variant: measuringCupLiquidVariantOneCup,
        },

        // Culinary: measure the rolled oats with a dry measuring cup.
        {
          tool: measuringCupDry,
          variant: measuringCupDryVariantHalfCup,
        },

        // Culinary: measure the salt with a calibrated 1/4-teaspoon spoon.
        {
          tool: measuringSpoon,
          variant: measuringSpoonVariantQuarterTeaspoon,
        },

        // Culinary: cook the single serving in the small saucepan variant.
        {
          tool: saucepan,
          variant: saucepanVariantPointNineQuart,
        },
      ],
    },
  ],
};
