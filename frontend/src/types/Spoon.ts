import type { BaseKitchenTool } from "./BaseKitchenTool";
import type { SpoonType } from "./SpoonTypes";

export type Spoon = BaseKitchenTool & {
  category: "spoon";
  type: SpoonType;
};
