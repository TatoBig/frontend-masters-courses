type FavoriteColors =
  | "dark sienna"
  | "van dyke brown"
  | "yellow ochre"
  | "sap green"
  | "titanium white"
  | "phthalo green"
  | "prussian blue"
  | "cadium yellow"
  | [number, number, number]
  | { red: number; green: number; blue: number };

type StringColors = Extract<FavoriteColors, string>;

type ObjectColors = Extract<FavoriteColors, object>;
type RedColors = Extract<FavoriteColors, { red: number }>;

type ArrayColors = Extract<FavoriteColors, number[]>;

