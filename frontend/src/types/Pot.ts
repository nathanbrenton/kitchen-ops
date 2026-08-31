import type { BaseCookingTool } from "./BaseCookingTool";
import type { PotType } from "./PotTypes";

export type Pot = BaseCookingTool & {
  category: "pot";
  type: PotType;
};
