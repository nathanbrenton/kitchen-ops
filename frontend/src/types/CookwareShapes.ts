// TypeScript: this union limits cookware shape values to known options.
// The literal values also let TypeScript distinguish between different
// dimension object shapes later.
//
// Culinary: round cookware is usually described by diameter,
// while rectangular cookware is described by length and width.
export type CookwareShape =
  | "round"
  | "rectangular";
