// TypeScript: these are type-only imports for all supported
// kitchen-tool variant object shapes.

import type { ForkVariant } from "./ForkVariant";
import type { KnifeVariant } from "./KnifeVariant";
import type { LidVariant } from "./LidVariant";
import type { MeasuringCupVariant } from "./MeasuringCupVariant";
import type { MeasuringSpoonVariant } from "./MeasuringSpoonVariant";
import type { PanVariant } from "./PanVariant";
import type { PotVariant } from "./PotVariant";
import type { SpoonVariant } from "./SpoonVariant";


// TypeScript: this is a union type definition.
// The "|" operator means a KitchenToolVariant may be ONE
// of the listed variant types.
//
// Culinary: this gives recipes and inventory one shared type
// for referring to a specific version of many tool families.
//
// Examples:
// - 1-cup liquid measuring cup
// - 1/4-teaspoon measuring spoon
// - 0.9-quart saucepan
// - 12-centimeter lid
export type KitchenToolVariant =
  | ForkVariant
  | KnifeVariant
  | LidVariant
  | MeasuringCupVariant
  | MeasuringSpoonVariant
  | PanVariant
  | PotVariant
  | SpoonVariant;
