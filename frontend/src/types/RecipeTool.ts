// TypeScript: this file contains a type alias declaration.
//
// KitchenOps domain model: RecipeTool represents one kitchen-tool
// requirement inside a recipe serving profile.


// TypeScript: these are type-only imports used for static type checking.
import type { KitchenTool } from "./KitchenTool";
import type { KitchenToolVariant } from "./KitchenToolVariant";


// TypeScript: this type alias declaration defines an object type.
//
// KitchenOps domain model:
// - tool identifies the generic kitchen-tool family.
// - variant optionally identifies the specific size/version required.
export type RecipeTool = {
  tool: KitchenTool;

  // TypeScript: "?" marks variant as an optional property.
  variant?: KitchenToolVariant;
};
