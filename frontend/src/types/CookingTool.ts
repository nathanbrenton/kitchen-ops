import type { DryMeasuringCup } from "./DryMeasuringCup";
import type { Fork } from "./Fork";
import type { Knife } from "./Knife";
import type { LiquidMeasuringCup } from "./LiquidMeasuringCup";
import type { MeasuringSpoon } from "./MeasuringSpoon";
import type { Pan } from "./Pan";
import type { Pot } from "./Pot";
import type { Spoon } from "./Spoon";

export type CookingTool =
  | Spoon
  | Fork
  | Knife
  | Pan
  | Pot
  | LiquidMeasuringCup
  | DryMeasuringCup
  | MeasuringSpoon;
