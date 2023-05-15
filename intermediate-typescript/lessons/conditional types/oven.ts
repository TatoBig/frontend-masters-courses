class Grill {
  startGas() {}
  stopGas() {}
}

class Oven {
  setTemperature(degrees: number) {}
}

type CookingDevice<T> = T extends "grill" ? Grill : Oven;

let grill: CookingDevice<"grill">
