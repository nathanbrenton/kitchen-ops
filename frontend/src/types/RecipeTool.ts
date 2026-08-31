import type { CookingTool } from "./CookingTool";

export type RecipeTool = {
  tool: CookingTool;
  minimumServings: number;
  maximumServings: number;
};
