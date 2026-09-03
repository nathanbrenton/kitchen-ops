// TypeScript: these are type-only imports used only by the compiler
// for static type checking.

import type { BaseKitchenTool } from "./BaseKitchenTool";
import type { LidVariant } from "./LidVariant";


// TypeScript: "&" creates an intersection type.
// A Lid must contain every property from BaseKitchenTool
// AND the lid-specific properties defined below.
//
// Culinary: Lid represents the generic kitchen-tool family.
// Individual diameters such as 12 cm, 14 cm, or 20 cm are variants.
export type Lid = BaseKitchenTool & {
  category: "lid";

  // TypeScript: LidVariant[] means "an array of LidVariant objects."
  //
  // Culinary: one kitchen may own several lid sizes while they all
  // remain members of the same generic Lid tool family.
  variants: LidVariant[];
};
