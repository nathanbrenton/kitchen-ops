import type { TemperatureUnit } from "./TemperatureUnits";

export type TemperatureMeasurement = {
  quantity: number;
  unit: TemperatureUnit;
};
