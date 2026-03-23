export function gcdBruteForce(a: number, b: number): number {

    // Which is the smaller number?
  const min = Math.min(a, b);
  // Loop from the smaller number down to 1
  for (let i = min; i >= 1; i--) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }
    return 1;
}
