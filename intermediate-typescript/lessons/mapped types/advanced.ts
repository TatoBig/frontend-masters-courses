// Hardcoded
type PartOfWindow = {
  [Key in "document" | "location" | "setTimeout"]: Window[Key];
};

type PickwindowProperties<Keys extends keyof Window> = {
  [Key in Keys]: Window[Key];
};

type PartOfWindoImproved = PickwindowProperties<
  "document" | "location" | "setTimeout"
>;

type PickProperties<ValueType, Keys extends keyof ValueType> = {
  [Key in Keys]: ValueType[Key];
};

type PartOfWindowGeneral = PickProperties<Window, "document">;

// All comes to -> Pick
