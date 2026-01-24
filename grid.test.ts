import { assertEquals, assertStrictEquals } from "@std/assert";
import { ArrayGrid } from "./grid.ts";
import { GridLocation } from "./grid-location.ts";
import { Vector } from "./vector.ts";

Deno.test("ArrayGrid: set and get", () => {
  const dimensions = new Vector(3, 4);
  const grid = ArrayGrid.createWithInitialValue(dimensions, 0);

  let i = 0;
  const location = new GridLocation(0, 0);
  for (location.row = 0; location.row < dimensions.rows; location.row++) {
    for (
      location.column = 0;
      location.column < dimensions.columns;
      location.column++
    ) {
      const value = i++;
      grid.set(
        location,
        value,
      );
      assertStrictEquals(grid.get(location), value);
    }
  }
});

Deno.test("ArrayGrid: valuesWithLocations", () => {
  const grid = ArrayGrid.fromString("abc\ndef\n");
  assertEquals(Array.from(grid.valuesWithLocations()), [
    { location: new GridLocation(0, 0), value: "a" },
    { location: new GridLocation(0, 1), value: "b" },
    { location: new GridLocation(0, 2), value: "c" },
    { location: new GridLocation(1, 0), value: "d" },
    { location: new GridLocation(1, 1), value: "e" },
    { location: new GridLocation(1, 2), value: "f" },
  ]);
});
