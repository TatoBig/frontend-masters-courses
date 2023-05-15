interface Car {
  make: string;
  model: string;
  year: number;
  color: {
    red: string;
    green: string;
    blue: string;
  };
}

let carColor: Car['color']
let carColorRedComponent: Car['color']['red']

let carProperty: Car['color' | 'year']
