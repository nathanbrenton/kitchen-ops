// TypeScript: each import below brings in one specific kitchen-tool type.
// These are type-only imports, so they help TypeScript check our code
// without adding runtime JavaScript for the imported types.

import type { Fork } from "./Fork";
import type { Knife } from "./Knife";
import type { Lid } from "./Lid";
import type { MeasuringCup } from "./MeasuringCup";
import type { MeasuringSpoon } from "./MeasuringSpoon";
import type { Pan } from "./Pan";
import type { Pot } from "./Pot";
import type { Spoon } from "./Spoon";


// TypeScript: this is a union type.
// The "|" symbol means "OR".
//
// A CookingTool can be a Fork OR Knife OR Lid OR MeasuringCup,
// and so on.
//
// Culinary: this gives KitchenOps one shared type for tools used
// during food preparation and cooking, while still preserving the
// more specific shape of each individual tool family.
//
// Example:
// a saucepan can still have pan-specific properties,
// while a measuring cup can have measuring-cup-specific properties,
// but both can still be treated as CookingTool values.

export type CookingTool =
  | Fork
  | Knife
  | Lid
  | MeasuringCup
  | MeasuringSpoon
  | Pan
  | Pot
  | Spoon;
