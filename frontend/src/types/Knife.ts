import type { BaseCookingTool } from "./BaseCookingTool";
import type { KnifeType } from "./KnifeTypes";

export type Knife = BaseCookingTool & {
  category: "knife";
  type: KnifeType;
};
