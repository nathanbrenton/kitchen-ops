// This is a DATA MODULE file.
//
// TypeScript: this module creates concrete object values that conform
// to the Recipe type alias declaration.
//
// KitchenOps domain model: each recipe contains manually defined serving
// profiles plus optional rights/provenance metadata.


// ============================================================
// IMPORTS
// ============================================================

// TypeScript: this is a type-only import used for static type checking.
// It does not create a runtime JavaScript dependency.
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

// TypeScript: this object literal is statically checked against the
// Recipe type alias declaration.
//
// KitchenOps domain model: basic oatmeal is classified as a traditional
// culinary preparation rather than an original KitchenOps invention.
//
// Rights distinction:
// the underlying oatmeal preparation is traditional, while original
// KitchenOps prose, photography, video, layout, and other expressive
// material may still have separate copyright protection.
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

          // TypeScript: measurement must conform to one member of the
          // Measurement union type.
          //
          // Culinary: water is measured by volume.
          measurement: {
            quantity: 1,
            unit: "cup",
          },
        },

        {
          ingredient: salt,
          variety: celticSeaSalt,

          // TypeScript: this object also conforms to VolumeMeasurement,
          // which is one member of the Measurement union type.
          //
          // Culinary: the recipe uses 1/4 teaspoon of salt.
          measurement: {
            quantity: 0.25,
            unit: "teaspoon",
          },
        },

        {
          ingredient: oats,
          form: rolled,

          // Culinary: rolled oats are measured here with a dry
          // measuring cup.
          measurement: {
            quantity: 0.5,
            unit: "cup",
          },
        },
      ],

      tools: [
        {
          tool: measuringCupLiquid,
          variant: measuringCupLiquidVariantOneCup,
        },

        {
          tool: measuringCupDry,
          variant: measuringCupDryVariantHalfCup,
        },

        {
          tool: measuringSpoon,
          variant: measuringSpoonVariantQuarterTeaspoon,
        },

        {
          tool: saucepan,
          variant: saucepanVariantPointNineQuart,
        },
      ],
    },
  ],

  rights: {
    // TypeScript: sourceAttributions is an array property whose elements
    // must conform to the RecipeSourceAttribution object type.
    sourceAttributions: [
      {
        relationship: "traditional",
        notes:
          "Basic oatmeal is a traditional/common preparation with no single identifiable modern originator.",
      },
    ],

    // TypeScript: usagePolicy is an optional nested object property.
    // Its outputs property is an array of RecipeOutputPolicy objects.
    //
    // KitchenOps domain model:
    // full attribution belongs on surfaces with room for provenance,
    // while compact attribution is more appropriate for video overlays.
    usagePolicy: {
      outputs: [
        {
          surface: "web",
          attributionDetail: "full",
        },
        {
          surface: "pdf",
          attributionDetail: "full",
        },
        {
          surface: "youtube-description",
          attributionDetail: "full",
        },
        {
          surface: "video-end-credit",
          attributionDetail: "compact",
        },
        {
          surface: "video-watermark",
          attributionDetail: "compact",
        },
      ],
    },

    // KitchenOps domain model:
    // license is intentionally omitted until a content-licensing
    // policy is selected for KitchenOps recipe/editorial/media content.
  },
};
