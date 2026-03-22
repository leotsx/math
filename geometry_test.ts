import { assertAlmostEquals } from "jsr:@std/assert@^1.0.0";
import { Circle, Point2D, Rectangle } from "./geometry.ts";


// Point2D Distance
Deno.test("distance between (0,0) and (3,4) is 5", () => {
  // Given
  const point1 = new Point2D(0, 0);
  const point2 = new Point2D(3, 4);

  // When
  const actual = point1.distanceTo(point2);

  // Then
  assertAlmostEquals(actual, 5, 0.01);
});


// Circle Circumference
Deno.test("circumference of a circle with radius 5 is roughtly 31.416", () => {
  // Given
  const circle = new Circle(new Point2D(3, 4), 5);

  // When
  const actual = circle.circumference();

  // Then
  assertAlmostEquals(actual, 31.416, 0.01);
});

// Circle Area
Deno.test("area of a circle with radius 5 is roughly 78.54", () => {
  // Given
  const circle = new Circle(new Point2D(3, 4), 5);

  // When
  const actual = circle.area();

  // Then
  assertAlmostEquals(actual, 78.54, 0.01);
});

// Circle Diameter
Deno.test("diameter of a circle with radius 5 is 10", () => {
  // Given
  const circle = new Circle(new Point2D(3, 4), 5);

  // When
  const actual = circle.diameter();

  // Then
  assertAlmostEquals(actual, 10, 0.01);
});


// Rectangle Area
Deno.test("area of a rectangle with width 5 and height 5 is roughly 25", () => {
  // Given
  const rectangle = new Rectangle(new Point2D(0, 0), new Point2D(5, 5));

  // When
  const actual = rectangle.area();

  // Then
  assertAlmostEquals(actual, 25, 0.01);
});

// Rectangle Circumference
Deno.test("circumference of a rectangle with width 5 and height 5 is roughly 20", () => {
  // Given
  const rectangle = new Rectangle(new Point2D(0, 0), new Point2D(5, 5));

  // When
  const actual = rectangle.circumference();

  // Then
  assertAlmostEquals(actual, 20, 0.01);
});

// Rectangle Diagonal
Deno.test("diagonal of a rectangle with width 5 and height 5 is roughly 7.07", () => {
  // Given
  const rectangle = new Rectangle(new Point2D(0, 0), new Point2D(5, 5));

  // When
  const actual = rectangle.diagonal();

  // Then
  assertAlmostEquals(actual, 7.07, 0.01);
});
