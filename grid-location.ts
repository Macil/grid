import type { Direction } from "./direction.ts";
import { Vector } from "./vector.ts";

/**
 * A location on a grid.
 *
 * The row represents vertical position (positive is down) and the column
 * represents horizontal position (positive is right).
 */
export class GridLocation {
  constructor(public row: number, public column: number) {}

  add(vector: Vector): GridLocation {
    return new GridLocation(
      this.row + vector.rows,
      this.column + vector.columns,
    );
  }

  subtract(location: GridLocation): Vector {
    return new Vector(this.row - location.row, this.column - location.column);
  }

  above(distance: number): GridLocation {
    return new GridLocation(this.row - distance, this.column);
  }

  below(distance: number): GridLocation {
    return new GridLocation(this.row + distance, this.column);
  }

  left(distance: number): GridLocation {
    return new GridLocation(this.row, this.column - distance);
  }

  right(distance: number): GridLocation {
    return new GridLocation(this.row, this.column + distance);
  }

  relative(direction: Direction, distance: number): GridLocation {
    return this.add(Vector.inDirection(direction, distance));
  }

  modulo(other: Vector): GridLocation {
    return new GridLocation(
      ((this.row % other.rows) + other.rows) % other.rows,
      ((this.column % other.columns) + other.columns) % other.columns,
    );
  }

  equals(other: GridLocation): boolean {
    return this === other ||
      (this.row === other.row && this.column === other.column);
  }

  static fromString(input: string): GridLocation {
    const inputParts = input.split(",");
    if (inputParts.length !== 2) {
      throw new Error(`Invalid location string: ${input}`);
    }
    const [row, column] = inputParts.map(Number);
    return new GridLocation(row, column);
  }

  toString(): string {
    return `${this.row},${this.column}`;
  }

  clone(): GridLocation {
    return new GridLocation(this.row, this.column);
  }
}
