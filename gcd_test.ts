import { assertEquals } from "jsr:@std/assert";
import { gcdBruteForce } from "./gcd.ts";

// Table of test cases: start with trivial ones like (1,1), then add more
const gcdTests = [
  { a: 1, b: 1, gcd: 1 },  
  { a: 1, b: 2, gcd: 1 }, 
  { a: 2, b: 2, gcd: 2 },  
  { a: 3, b: 4, gcd: 1 },  
  { a: 6, b: 9, gcd: 3 },  
  { a: 81, b: 36, gcd: 9 },
];

Deno.test("gcdBruteForce with table-driven tests", () => {
  for (const { a, b, gcd } of gcdTests) {
    const actual = gcdBruteForce(a, b);
    assertEquals(actual, gcd);  // Fails initially until you implement the function
  }
});