import type { BaseCookingTool } from "./BaseCookingTool";
import type { ForkType } from "./ForkTypes";

export type Fork = BaseCookingTool & {
  category: "fork";
  type: ForkType;
};
