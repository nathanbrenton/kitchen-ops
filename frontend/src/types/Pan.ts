import type { BaseCookingTool } from "./BaseCookingTool";
import type { PanType } from "./PanTypes";

export type Pan = BaseCookingTool & {
  category: "pan";
  type: PanType;
};
