import { assertAlmostEquals } from "jsr:@std/assert@^1.0.0";
import { Circle, Point2D, Rectangle } from "./geometry.ts";


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
Deno.test("circumference of a circle with radius 5 is roughtly 31.416", () => {
  // Given
  const circle = new Circle(new Point2D(3, 4), 5);

  // When
  const actual = circle.circumference();

  // Then
  assertAlmostEquals(actual, 31.416, 0.01);
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
