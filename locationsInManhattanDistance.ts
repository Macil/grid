import { GridLocation } from "./grid-location.ts";

export function* locationsInManhattanDistance(
  location: GridLocation,
  distance: number,
): Generator<GridLocation> {
  for (let dr = -distance; dr <= distance; dr++) {
    const dcAbs = distance - Math.abs(dr);
    for (let dc = -dcAbs; dc <= dcAbs; dc++) {
      yield new GridLocation(location.row + dr, location.column + dc);
    }
  }
}
