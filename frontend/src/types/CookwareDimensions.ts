import type { RectangularCookwareDimensions } from "./RectangularCookwareDimensions";
import type { RoundCookwareDimensions } from "./RoundCookwareDimensions";


// TypeScript: "|" means OR.
// A cookware dimension record is either round OR rectangular.
//
// This is a discriminated union because each option has a different
// literal value in its "shape" property.
export type CookwareDimensions =
  | RoundCookwareDimensions
  | RectangularCookwareDimensions;
