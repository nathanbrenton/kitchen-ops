// TypeScript: a union type limits length units to these approved string values.
// This prevents accidental values such as "cms" or "inches" from entering the data.
//
// Culinary: cookware dimensions are commonly recorded in metric and U.S.
// customary units, especially centimeters, millimeters, and inches.
export type LengthUnit =
  | "millimeter"
  | "centimeter"
  | "inch";
