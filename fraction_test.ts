import { assertAlmostEquals, assertEquals } from "jsr:@std/assert";
import { Fraction } from "./fraction.ts";


// toFloat
Deno.test("fraction of 1/1 is 1.0", () => {
  // Arrange
  const fraction = new Fraction(1, 1);

  // Act
  const float = fraction.toFloat(0.1);

  // Assert
  assertEquals(float, 1.0);
});


// toString
Deno.test("fraction of 2/3 is roughly 0.67", () => {
  // Arrange
  const fraction = new Fraction(2, 3);

  // Act
  const float = fraction.toFloat(0.01);

  // Assert
  assertAlmostEquals(float, 0.67);
});


// Add
Deno.test("1/3 + 2/6 = 2/3 is roughly 0.67", () => {
  // Arrange
  const left = new Fraction(1, 3);
  const right = new Fraction(2, 6);

  // Act
  left.add(right);

  // Assert
  assertAlmostEquals(left.toFloat(0.01), 0.67);
});


// Subtract 
Deno.test("1/2 - 1/4 = 1/4 is roughly 0.25", () => {
  // Arrange
  const left = new Fraction(1, 2);
  const right = new Fraction(1, 4);

  // Act
  left.subtract(right);

  // Assert
  assertAlmostEquals(left.toFloat(0.01), 0.25);
});

// Multiply
Deno.test("1/4 * 2/5 =  is roughly 0.1", () => {

  // Arrange
  const left = new Fraction(1, 4);
  const right = new Fraction(2, 5);

  // Act 
  left.multiply(right);

  // Assert
  assertAlmostEquals(left.toFloat(0.01), 0.1);

});


// Divide 
Deno.test("1/6 / 2/7 =  is roughly 0.58", () => {

  // Arrange
  const left = new Fraction(1, 6);
  const right = new Fraction(2, 7);

  // Act 
  left.divide(right);

  // Assert
  assertAlmostEquals(left.toFloat(0.01), 0.58);

});