import { assertEquals } from "jsr:@std/assert";
import { roundTo } from "./utils.ts";

// roundTo
Deno.test("roundTo 3.14159 to precision 0.01 is 3.14", () => {
  // Arrange
  const value = 3.14159;
  const precision = 0.01;

  // Act
  const result = roundTo(value, precision);

  // Assert
  assertEquals(result, 3.14);
});

Deno.test("roundTo 2.7 to precision 1 is 3", () => {
  // Arrange
  const value = 2.7;
  const precision = 1;

  // Act
  const result = roundTo(value, precision);

  // Assert
  assertEquals(result, 3);
});