// TypeScript: this file contains a union type declaration.
//
// A union type uses "|" to allow a value to conform to ONE
// of several possible types.
//
// KitchenOps domain model: KitchenTool is the umbrella type for
// reusable physical tools used throughout the kitchen, including
// cooking, measuring, serving, covering, and ingredient storage.


// TypeScript: these are type-only imports.
// They are used for static type checking and do not create
// runtime JavaScript dependencies.

import type { Fork } from "./Fork";
import type { Knife } from "./Knife";
import type { Lid } from "./Lid";
import type { MeasuringCup } from "./MeasuringCup";
import type { MeasuringSpoon } from "./MeasuringSpoon";
import type { Pan } from "./Pan";
import type { Pot } from "./Pot";
import type { Spoon } from "./Spoon";
import type { StorageContainer } from "./StorageContainer";


// TypeScript: this union type declaration defines KitchenTool.
//
// The "|" operator means a KitchenTool may be ONE of the listed
// kitchen-tool types.
//
// KitchenOps domain model: individual tool families preserve their
// specialized properties while sharing one common umbrella type.
export type KitchenTool =
  | Fork
  | Knife
  | Lid
  | MeasuringCup
  | MeasuringSpoon
  | Pan
  | Pot
  | Spoon
  | StorageContainer;
