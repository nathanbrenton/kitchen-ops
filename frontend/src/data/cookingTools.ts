// This is a DATA MODULE file.
//
// TypeScript: this module creates concrete object values that conform
// to reusable type aliases defined in src/types/.
//
// Culinary: this catalog describes generic kitchen-tool families and
// useful physical variants. Private manufacturer/model/inventory details
// are intentionally kept out of this public-facing tool catalog.


// ============================================================
// IMPORTS
// ============================================================

// TypeScript: "import type" creates a type-only import.
// Type-only imports are used for static type checking and are removed
// from the emitted JavaScript.

import type { KitchenTool } from "../types/KitchenTool";

import type { MeasuringCup } from "../types/MeasuringCup";
import type { MeasuringCupVariant } from "../types/MeasuringCupVariant";

import type { MeasuringSpoon } from "../types/MeasuringSpoon";
import type { MeasuringSpoonVariant } from "../types/MeasuringSpoonVariant";

import type { Pan } from "../types/Pan";
import type { PanVariant } from "../types/PanVariant";

import type { Pot } from "../types/Pot";
import type { PotVariant } from "../types/PotVariant";

// TypeScript: these are type-only imports used for static type checking.
// KitchenOps domain model: Lid is the generic tool family;
// LidVariant represents one nominal lid diameter.
import type { Lid } from "../types/Lid";
import type { LidVariant } from "../types/LidVariant";



// ============================================================
// LIQUID MEASURING CUP VARIANTS
// ============================================================

// TypeScript: each constant below is explicitly annotated with the
// MeasuringCupVariant type alias.
//
// Culinary: liquid measuring cups are designed for self-leveling
// ingredients such as water, milk, broth, and oil.

export const measuringCupLiquidVariantOneCup: MeasuringCupVariant = {
  capacity: {
    quantity: 1,
    unit: "cup",
  },
};

export const measuringCupLiquidVariantTwoCup: MeasuringCupVariant = {
  capacity: {
    quantity: 2,
    unit: "cup",
  },
};

export const measuringCupLiquidVariantFourCup: MeasuringCupVariant = {
  capacity: {
    quantity: 4,
    unit: "cup",
  },
};


// ============================================================
// LIQUID MEASURING CUP
// ============================================================

// TypeScript: this object conforms to the MeasuringCup type alias.
// Its variants property is an array of MeasuringCupVariant objects.
//
// Culinary: one measuring-cup tool family may exist in several
// calibrated capacities.

export const measuringCupLiquid: MeasuringCup = {
  id: 1,
  title: "Liquid Measuring Cup",
  description: "A measuring cup designed for measuring liquid ingredients.",
  photoUrl: null,
  category: "measuring-cup",
  measurementStyle: "liquid",

  variants: [
    measuringCupLiquidVariantOneCup,
    measuringCupLiquidVariantTwoCup,
    measuringCupLiquidVariantFourCup,
  ],
};


// ============================================================
// DRY MEASURING CUP VARIANTS
// ============================================================

// Culinary: dry measuring cups are commonly filled and leveled.
// A particular kitchen may own only a subset of these possible sizes.

export const measuringCupDryVariantQuarterCup: MeasuringCupVariant = {
  capacity: {
    quantity: 0.25,
    unit: "cup",
  },
};

export const measuringCupDryVariantThirdCup: MeasuringCupVariant = {
  capacity: {
    quantity: 1 / 3,
    unit: "cup",
  },
};

export const measuringCupDryVariantHalfCup: MeasuringCupVariant = {
  capacity: {
    quantity: 0.5,
    unit: "cup",
  },
};

export const measuringCupDryVariantOneCup: MeasuringCupVariant = {
  capacity: {
    quantity: 1,
    unit: "cup",
  },
};


// ============================================================
// DRY MEASURING CUP
// ============================================================

// TypeScript: measuringCupDry and measuringCupLiquid share the same
// MeasuringCup type alias. Their measurementStyle string-literal values
// distinguish the two culinary measuring styles.

export const measuringCupDry: MeasuringCup = {
  id: 5,
  title: "Dry Measuring Cup",
  description: "A measuring cup designed for measuring dry ingredients.",
  photoUrl: null,
  category: "measuring-cup",
  measurementStyle: "dry",

  variants: [
    measuringCupDryVariantQuarterCup,
    measuringCupDryVariantThirdCup,
    measuringCupDryVariantHalfCup,
    measuringCupDryVariantOneCup,
  ],
};


// ============================================================
// MEASURING SPOON VARIANTS
// ============================================================

// TypeScript: MeasuringSpoonVariant reuses the shared
// VolumeMeasurement type instead of maintaining a separate
// measuring-spoon-specific unit system.
//
// Culinary: measuring spoons provide calibrated small-volume measures.

export const measuringSpoonVariantQuarterTeaspoon: MeasuringSpoonVariant = {
  capacity: {
    quantity: 0.25,
    unit: "teaspoon",
  },
};

export const measuringSpoonVariantHalfTeaspoon: MeasuringSpoonVariant = {
  capacity: {
    quantity: 0.5,
    unit: "teaspoon",
  },
};

export const measuringSpoonVariantOneTeaspoon: MeasuringSpoonVariant = {
  capacity: {
    quantity: 1,
    unit: "teaspoon",
  },
};

export const measuringSpoonVariantOneTablespoon: MeasuringSpoonVariant = {
  capacity: {
    quantity: 1,
    unit: "tablespoon",
  },
};


// ============================================================
// MEASURING SPOON
// ============================================================

// TypeScript: this single object represents a tool family.
// The variants array contains the individual calibrated capacities.
//
// Culinary: a typical measuring-spoon set contains several standard sizes.

export const measuringSpoon: MeasuringSpoon = {
  id: 6,
  title: "Measuring Spoon",
  description: "A calibrated spoon used for measuring small ingredient volumes.",
  photoUrl: null,
  category: "measuring-spoon",

  variants: [
    measuringSpoonVariantQuarterTeaspoon,
    measuringSpoonVariantHalfTeaspoon,
    measuringSpoonVariantOneTeaspoon,
    measuringSpoonVariantOneTablespoon,
  ],
};


// ============================================================
// SAUCEPAN VARIANTS
// ============================================================

// TypeScript: PanVariant.capacity and PanVariant.dimensions are optional
// properties, but these saucepan variants contain both.
//
// TypeScript: dimensions uses the CookwareDimensions discriminated-union
// type definition. The string-literal discriminator shape: "round"
// tells TypeScript that a diameter property is required.
//
// Culinary: capacity and diameter both help identify a saucepan size.
// These generalized dimensions come from cookware actually present in
// the kitchen, while private manufacturer/model information is omitted.

export const saucepanVariantPointNineQuart: PanVariant = {
  capacity: {
    quantity: 0.9,
    unit: "quart",
  },

  dimensions: {
    shape: "round",

    diameter: {
      quantity: 12,
      unit: "centimeter",
    },

    height: {
      quantity: 7,
      unit: "centimeter",
    },
  },
};

export const saucepanVariantOnePointTwoQuart: PanVariant = {
  capacity: {
    quantity: 1.2,
    unit: "quart",
  },

  dimensions: {
    shape: "round",

    diameter: {
      quantity: 14,
      unit: "centimeter",
    },

    height: {
      quantity: 8,
      unit: "centimeter",
    },
  },
};

export const saucepanVariantTwoPointSevenQuart: PanVariant = {
  capacity: {
    quantity: 2.7,
    unit: "quart",
  },

  dimensions: {
    shape: "round",

    diameter: {
      quantity: 18,
      unit: "centimeter",
    },

    height: {
      quantity: 10,
      unit: "centimeter",
    },
  },
};


// ============================================================
// SAUCEPAN
// ============================================================

// TypeScript: this is one Pan object containing several PanVariant
// object values rather than several unrelated saucepan objects.
//
// Culinary: recipes can eventually describe the size they require,
// while kitchen inventory can determine which owned saucepan satisfies it.

export const saucepan: Pan = {
  id: 2,
  title: "Saucepan",
  description: "A pan with high sides used for simmering, boiling, and stovetop cooking.",
  photoUrl: null,
  category: "pan",
  type: "sauce",

  variants: [
    saucepanVariantPointNineQuart,
    saucepanVariantOnePointTwoQuart,
    saucepanVariantTwoPointSevenQuart,
  ],
};


// ============================================================
// FRYING PAN VARIANTS
// ============================================================

// TypeScript: each constant is annotated with the PanVariant type alias.
//
// TypeScript: because dimensions.shape is the string literal "round",
// the CookwareDimensions discriminated union requires diameter instead
// of rectangular length and width properties.
//
// Culinary: round frying pans are normally identified primarily by
// diameter rather than by liquid capacity.

export const fryingPanVariantTwentyCentimeter: PanVariant = {
  dimensions: {
    shape: "round",

    diameter: {
      quantity: 20,
      unit: "centimeter",
    },

    height: {
      quantity: 3,
      unit: "centimeter",
    },
  },
};

export const fryingPanVariantTwentyTwoCentimeter: PanVariant = {
  dimensions: {
    shape: "round",

    diameter: {
      quantity: 22,
      unit: "centimeter",
    },

    height: {
      quantity: 3.3,
      unit: "centimeter",
    },
  },
};

//
// TypeScript: height uses the MeasurementValue<LengthMeasurement>
// generic union type indirectly through PanVariant.
//
// Because this value has minimum and maximum properties, TypeScript
// recognizes it as the MeasurementRange<LengthMeasurement> member
// of that union.
//
// Culinary: the recorded pan height is approximately 4.5–4.9 cm,
// so storing the range preserves the source data without inventing
// a midpoint such as 4.7 cm.
export const fryingPanVariantThirtyCentimeter: PanVariant = {
  dimensions: {
    shape: "round",

    diameter: {
      quantity: 30,
      unit: "centimeter",
    },

    height: {
      minimum: {
        quantity: 4.5,
        unit: "centimeter",
      },

      maximum: {
        quantity: 4.9,
        unit: "centimeter",
      },
    },
  },
};





// ============================================================
// FRYING PAN
// ============================================================

// TypeScript: this Pan object uses the string-literal type "frying"
// to identify the specific pan subtype.
//
// Culinary: all three owned frying pans map to the same generic
// frying-pan tool family while retaining their useful dimensions.

export const fryingPan: Pan = {
  id: 4,
  title: "Frying Pan",
  description: "A shallow round pan used for frying, searing, sautéing, and stovetop cooking.",
  photoUrl: null,
  category: "pan",
  type: "frying",

  variants: [
    fryingPanVariantTwentyCentimeter,
    fryingPanVariantTwentyTwoCentimeter,
    fryingPanVariantThirtyCentimeter,
  ],
};


// ============================================================
// RECTANGULAR ROASTING PAN VARIANT
// ============================================================

// TypeScript: this variant exercises the rectangular member of the
// CookwareDimensions discriminated-union type definition.
//
// Because shape is the string literal "rectangular", TypeScript expects
// length and width properties instead of diameter.
//
// Culinary: roasting and lasagna pans are commonly described by their
// body length × width. Approximate height and capacity are omitted for
// now because the recorded values are ranges.

// TypeScript: this PanVariant combines exact dimensions with ranged
// measurements.
//
// TypeScript: "length" and "width" use exact LengthMeasurement objects.
//
// TypeScript: "height" uses the MeasurementRange<LengthMeasurement>
// member of the MeasurementValue<LengthMeasurement> union type.
//
// TypeScript: "capacity" uses the MeasurementRange<VolumeMeasurement>
// member of the MeasurementValue<VolumeMeasurement> union type.
//
// KitchenOps domain model: this preserves documented ranges instead
// of inventing one falsely precise value.
//
// Culinary: the roasting pan is nominally 40 × 30 cm, with an
// approximate height of 8–8.5 cm and capacity of 8.2–9.2 liters.
export const roastingPanVariantFortyByThirtyCentimeter: PanVariant = {
  capacity: {
    minimum: {
      quantity: 8.2,
      unit: "liter",
    },

    maximum: {
      quantity: 9.2,
      unit: "liter",
    },
  },

  dimensions: {
    shape: "rectangular",

    length: {
      quantity: 40,
      unit: "centimeter",
    },

    width: {
      quantity: 30,
      unit: "centimeter",
    },

    height: {
      minimum: {
        quantity: 8,
        unit: "centimeter",
      },

      maximum: {
        quantity: 8.5,
        unit: "centimeter",
      },
    },
  },
};






// ============================================================
// RECTANGULAR ROASTING PAN
// ============================================================

export const roastingPan: Pan = {
  id: 7,
  title: "Rectangular Roasting Pan",
  description: "A rectangular pan used for roasting, baking, casseroles, and layered dishes such as lasagna.",
  photoUrl: null,
  category: "pan",
  type: "roasting",

  variants: [
    roastingPanVariantFortyByThirtyCentimeter,
  ],
};


// ============================================================
// LID VARIANTS
// ============================================================

// TypeScript: each constant is explicitly annotated with the
// LidVariant type alias.
//
// KitchenOps domain model: lid variants are identified publicly by
// nominal diameter rather than by manufacturer or cookware model.
//
// Culinary: matching nominal diameter indicates nominal compatibility
// with round cookware of the same diameter. Exact physical fit can
// later be confirmed in the private inventory layer.

export const lidVariantTwelveCentimeter: LidVariant = {
  nominalDiameter: {
    quantity: 12,
    unit: "centimeter",
  },
};

export const lidVariantFourteenCentimeter: LidVariant = {
  nominalDiameter: {
    quantity: 14,
    unit: "centimeter",
  },
};

export const lidVariantEighteenCentimeter: LidVariant = {
  nominalDiameter: {
    quantity: 18,
    unit: "centimeter",
  },
};

export const lidVariantTwentyCentimeter: LidVariant = {
  nominalDiameter: {
    quantity: 20,
    unit: "centimeter",
  },
};

export const lidVariantTwentyFourCentimeter: LidVariant = {
  nominalDiameter: {
    quantity: 24,
    unit: "centimeter",
  },
};


// ============================================================
// LID
// ============================================================

// TypeScript: this object conforms to the Lid type alias.
// Its variants property is an array of LidVariant objects.
//
// KitchenOps domain model: Lid is one generic tool family.
// Individual physical sizes are variants rather than separate tool types.
//
// Culinary: a 12 cm lid may nominally fit any round 12 cm cookware,
// regardless of whether that cookware is a saucepan, frying pan,
// sauté pan, chef pan, or another compatible vessel.
export const lid: Lid = {
  id: 8,
  title: "Lid",
  description: "A removable cover sized to fit compatible round cookware.",
  photoUrl: null,
  category: "lid",

  variants: [
    lidVariantTwelveCentimeter,
    lidVariantFourteenCentimeter,
    lidVariantEighteenCentimeter,
    lidVariantTwentyCentimeter,
    lidVariantTwentyFourCentimeter,
  ],
};





// ============================================================
// STOCK POT VARIANT
// ============================================================

// TypeScript: this named constant conforms to the PotVariant type alias.
//
// Culinary: the recorded stock pot has a nominal diameter and body height
// of approximately 24 cm.
//
// Its source records contain differing approximate/catalog capacities,
// so capacity is intentionally omitted until KitchenOps supports
// approximation/range metadata.


// TypeScript: "capacity" uses the MeasurementRange<VolumeMeasurement>
// member of the MeasurementValue<VolumeMeasurement> union type.
//
// KitchenOps domain model: this preserves the documented marketed
// capacity range without collapsing it into one approximate number.
//
// Culinary: this stock pot is approximately 9.5–10 quarts in marketed
// capacity, with a 24 cm diameter and approximately 24 cm body height.
export const stockPotVariantTwentyFourCentimeter: PotVariant = {
  capacity: {
    minimum: {
      quantity: 9.5,
      unit: "quart",
    },

    maximum: {
      quantity: 10,
      unit: "quart",
    },
  },

  dimensions: {
    shape: "round",

    diameter: {
      quantity: 24,
      unit: "centimeter",
    },

    height: {
      quantity: 24,
      unit: "centimeter",
    },
  },
};





// ============================================================
// STOCK POT
// ============================================================

export const stockPot: Pot = {
  id: 3,
  title: "Stock Pot",
  description: "A deep pot used for boiling, simmering, and preparing larger quantities.",
  photoUrl: null,
  category: "pot",
  type: "stock",

  variants: [
    stockPotVariantTwentyFourCentimeter,
  ],
};


// ============================================================
// COOKING TOOL CATALOG
// ============================================================

// TypeScript: KitchenTool is a union type.
// Therefore, every array element must conform to at least one member
// of the KitchenTool union.
//
// Culinary: this array represents known generic tool families.
// It does NOT mean every kitchen location owns every possible tool
// or every possible variant.

export const cookingTools: KitchenTool[] = [
  measuringCupDry,
  measuringCupLiquid,
  measuringSpoon,
  saucepan,
  fryingPan,
  roastingPan,
  lid,
  stockPot,
];
