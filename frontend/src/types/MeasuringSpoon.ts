import type { BaseKitchenTool } from "./BaseKitchenTool";
import type { MeasuringSpoonVariant } from "./MeasuringSpoonVariant";

export type MeasuringSpoon = BaseKitchenTool & {
  category: "measuring-spoon";
  variants: MeasuringSpoonVariant[];
};
