import { ArrayGrid } from "./grid.ts";
import { Vector } from "./vector.ts";
import { Location } from "./location.ts";

Deno.bench("ArrayGrid manipulation by row order", () => {
  const dimensions = new Vector(2000, 2000);
  const grid = ArrayGrid.createWithInitialValue(dimensions, 0);

  const location = new Location(0, 0);
  for (let run = 0; run < 4; run++) {
    for (location.row = 0; location.row < dimensions.rows; location.row++) {
      for (
        location.column = 0;
        location.column < dimensions.columns;
        location.column++
      ) {
        grid.set(location, grid.get(location)! + 1);
      }
    }
  }
});

Deno.bench("ArrayGrid manipulation by column order", () => {
  const dimensions = new Vector(2000, 2000);
  const grid = ArrayGrid.createWithInitialValue(dimensions, 0);

  const location = new Location(0, 0);
  for (let run = 0; run < 4; run++) {
    for (
      location.column = 0;
      location.column < dimensions.columns;
      location.column++
    ) {
      for (location.row = 0; location.row < dimensions.rows; location.row++) {
        grid.set(location, grid.get(location)! + 1);
      }
    }
  }
});
