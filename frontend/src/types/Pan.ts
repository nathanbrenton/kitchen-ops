import type { BaseKitchenTool } from "./BaseKitchenTool";
import type { PanType } from "./PanTypes";
import type { PanVariant } from "./PanVariant";

export type Pan = BaseKitchenTool & {
  category: "pan";
  type: PanType;
  variants: PanVariant[];
};
