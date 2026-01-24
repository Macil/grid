import { assertEquals } from "@std/assert";
import { locationsInManhattanDistance } from "./locationsInManhattanDistance.ts";
import { GridLocation } from "./grid-location.ts";

Deno.test("works", () => {
  assertEquals(
    Array.from(locationsInManhattanDistance(new GridLocation(10, 100), 2)),
    [
      new GridLocation(8, 100),
      new GridLocation(9, 99),
      new GridLocation(9, 100),
      new GridLocation(9, 101),
      new GridLocation(10, 98),
      new GridLocation(10, 99),
      new GridLocation(10, 100),
      new GridLocation(10, 101),
      new GridLocation(10, 102),
      new GridLocation(11, 99),
      new GridLocation(11, 100),
      new GridLocation(11, 101),
      new GridLocation(12, 100),
    ],
  );
});
