import type { CookingTool } from "./CookingTool";
import type { KitchenToolVariant } from "./KitchenToolVariant";

export type RecipeTool = {
  tool: CookingTool;
  variant?: KitchenToolVariant;
};
