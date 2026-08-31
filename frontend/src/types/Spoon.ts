import type { BaseCookingTool } from "./BaseCookingTool";
import type { SpoonType } from "./SpoonTypes";

export type Spoon = BaseCookingTool & {
  category: "spoon";
  type: SpoonType;
};
