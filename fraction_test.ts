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

// toString
Deno.test("fraction of 3/4 toString is '3/4'", () => {
  // Arrange
  const fraction = new Fraction(3, 4);

  // Act
  const str = fraction.toString();

  // Assert
  assertEquals(str, "3/4");
});

// Parse
Deno.test("parse '5/8' returns fraction 5/8", () => {
  // Arrange
  const expression = "5/8";

  // Act
  const fraction = Fraction.parse(expression);

  // Assert
  assertAlmostEquals(fraction.toFloat(0.01), 0.63);
});

// Parse invalid syntax
Deno.test("parse 'invalid' throws error", () => {
  // Arrange
  const expression = "invalid";

  // Act & Assert
  try {
    Fraction.parse(expression);
    // Should not reach here
    assertEquals(true, false);
  } catch (error) {
    assertEquals((error as Error).message, 'illegal syntax: "[numerator]/[denominator]" required');
  }
});

// Parse non-numeric
Deno.test("parse 'a/b' throws error", () => {
  // Arrange
  const expression = "a/b";

  // Act & Assert
  try {
    Fraction.parse(expression);
    // Should not reach here
    assertEquals(true, false);
  } catch (error) {
    assertEquals((error as Error).message, 'non-numeric numerator/denominator');
  }
});