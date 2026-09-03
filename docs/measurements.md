# KitchenOps — Measurement Standards

This document defines the measurement conventions KitchenOps should use for recipes, kitchen tools, inventory, nutrition, and future public-facing content.

## Measurement Philosophy

KitchenOps should use **metric/SI units as the canonical internal measurement system**, while supporting familiar U.S. customary culinary units for display.

Primary internal base units:

- Volume: milliliters (mL)
- Mass: grams (g)
- Temperature: degrees Celsius (°C)
- Count: integer/item-based quantities

U.S. customary equivalents may be shown alongside metric values for accessibility.

Example:

- 1 cup water / 240 mL
- 1/2 cup rolled oats / verified gram equivalent when available
- 1/4 teaspoon salt / 1.25 mL
- 350 °F / approximately 175 °C

## U.S. Culinary Measurement Conventions

For KitchenOps recipe presentation, use the FDA/NIST culinary equivalents when a convenient household conversion is desired:

| U.S. measure | Metric culinary equivalent |
|---|---:|
| 1/4 teaspoon | 1.25 mL |
| 1/2 teaspoon | 2.5 mL |
| 1 teaspoon | 5 mL |
| 1 tablespoon | 15 mL |
| 1 fluid ounce | 30 mL |
| 1/4 cup | 60 mL |
| 1/3 cup | 80 mL |
| 1/2 cup | 120 mL |
| 1 cup | 240 mL |
| 1 pint / 2 cups | 480 mL |
| 1 quart / 4 cups | approximately 950 mL |
| 1 gallon | approximately 3.8 L |

For mass:

| U.S. measure | Metric equivalent |
|---|---:|
| 1 ounce | approximately 28 g |
| 1 pound | approximately 454 g |

These are convenient culinary/labeling equivalents rather than a claim that every customary unit is mathematically identical to its rounded metric presentation.

## FDA Reference Convention

For U.S. nutrition-labeling purposes, FDA uses:

- 1 teaspoon = 5 mL
- 1 tablespoon = 15 mL
- 1 cup = 240 mL
- 1 fluid ounce = 30 mL
- 1 ounce by weight = 28 g

KitchenOps should use these values when presenting U.S. household measures alongside metric quantities unless a more exact scientific conversion is specifically required.

## International / Codex Convention

Codex Alimentarius nutrition guidance emphasizes metric presentation, commonly expressing nutritional quantities per:

- 100 g
- 100 mL
- serving/portion, when appropriate

KitchenOps nutrition profiles should therefore be designed so nutrient data can be represented cleanly per 100 g or 100 mL, with recipe-serving values derived separately.

## NIST Metric Kitchen

NIST Metric Kitchen is the preferred KitchenOps reference for practical conversion between U.S. household culinary measures and metric units.

KitchenOps should favor NIST culinary equivalents for user-facing recipe conversions and tool-capacity references.

## Volume vs. Mass

Volume and mass are different measurement dimensions.

Safe generic conversions include:

- teaspoon ↔ tablespoon ↔ cup ↔ milliliter ↔ liter
- ounce by weight ↔ pound ↔ gram ↔ kilogram

KitchenOps must **not** assume a universal conversion between volume and mass.

Incorrect assumption:

```text
1 cup = X grams
```

Correct model:

```text
ingredient + form + volume
→ ingredient-specific conversion/density
→ mass
```

Examples:

- 1 cup water
- 1 cup rolled oats
- 1 cup flour
- 1 cup honey

occupy similar volumes but have different masses.

## Baking and Precision

For baking and other precision-sensitive recipes, KitchenOps should prefer mass measurements for solid ingredients whenever reliable data is available.

Example:

```text
Flour: 500 g
Water: 350 g / 350 mL
Salt: 10 g
```

Mass measurements generally improve repeatability because they are less affected by:

- packing
- scooping technique
- particle size
- settling
- container geometry

### Baker's Percentages

For bread and similar formulas, KitchenOps may later support baker's percentages.

Example:

```text
Flour: 500 g = 100%
Water: 350 g = 70%
Salt: 10 g = 2%
```

This should be treated as a specialized recipe-scaling system, not as the default model for all KitchenOps recipes.

## Ingredient-Specific Conversions

Volume-to-mass conversions must be stored per ingredient/form when verified.

Example future relationship:

```text
Rolled Oats
└── Measurement Conversion
    └── 1 cup ≈ verified gram value
```

A conversion may depend on:

- ingredient identity
- form
- processing state
- packing method
- preparation state

KitchenOps should not fabricate these values.

## Unit-System Architecture

KitchenOps should eventually use one shared measurement model across:

- Recipe ingredients
- Kitchen-tool capacities
- Measuring cups and spoons
- Cookware capacities
- Storage containers
- Inventory quantities
- Nutrition profiles

Avoid defining independent unit vocabularies in each subsystem when one reusable measurement system can serve all of them.

Potential measurement dimensions:

### Volume

- milliliter
- liter
- teaspoon
- tablespoon
- cup
- pint
- quart
- gallon

### Mass

- gram
- kilogram
- ounce
- pound

### Temperature

- Celsius
- Fahrenheit

### Count

- item
- piece
- clove
- slice
- other context-specific count units as needed

## Internal vs. Display Values

Preferred architecture:

```text
Canonical internal value
        ↓
Measurement conversion layer
        ↓
User-selected / context-appropriate display unit
```

Example:

```text
Internal: 240 mL
Display (U.S.): 1 cup
Display (Metric): 240 mL
```

Where practical, KitchenOps should retain enough precision internally to avoid repeated rounding errors.

## Public-Facing / YouTube Presentation

For content intended for both U.S. and international audiences, present both systems when useful.

Examples:

```text
1 cup / 240 mL water
```

```text
1/2 cup rolled oats / verified gram equivalent
```

```text
1/4 teaspoon / 1.25 mL salt
```

```text
350 °F / approximately 175 °C
```

For baking, prefer grams as the primary measurement and optionally provide household equivalents.

## Measurement Accuracy Policy

KitchenOps should distinguish among:

1. Exact defined conversions
2. Rounded culinary equivalents
3. Ingredient-specific empirical conversions
4. Estimated values

The UI and documentation should not present rounded or ingredient-dependent values as exact measurements.

## References

### National Institute of Standards and Technology (NIST)

Metric Kitchen — Cooking Measurement Equivalencies  
https://www.nist.gov/pml/owm/metric-si/metric-kitchen/metric-kitchen-cooking-measurement-equivalencies

Approximate Conversions from U.S. Customary Measures to Metric  
https://www.nist.gov/pml/owm/metric-si/unit-conversion/approximate-conversions-us-customary-measures-metric

### U.S. Food and Drug Administration (FDA)

Guidance for Industry: Guidelines for Determining Metric Equivalents of Household Measures  
https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-guidelines-determining-metric-equivalents-household-measures

### Codex Alimentarius / FAO / WHO

Codex Guidelines on Nutrition Labelling  
https://www.fao.org/4/y2770e/y2770e06.htm

## Future Work

- Create a shared KitchenOps measurement-unit model.
- Normalize volume internally to mL.
- Normalize mass internally to g.
- Standardize temperature handling.
- Add verified ingredient-specific volume-to-mass conversions.
- Add metric/U.S. display preferences.
- Add conversion tests.
- Add precision/rounding rules.
- Add baker's-percentage support if useful.
- Add nutrition conversions per 100 g / 100 mL / serving.
