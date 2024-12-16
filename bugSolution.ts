function add(a: number, b: number): number {
  return a + b;
}

function addWithCheck(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseFloat(a) : a;
  const numB = typeof b === 'string' ? parseFloat(b) : b;
  if (isNaN(numA) || isNaN(numB)) {
    throw new Error("Invalid input: Arguments must be numbers or parsable strings.");
  }
  return numA + numB;
}

let result1 = add(1, 2); // Correct usage
let result2 = addWithCheck(1, "2"); // Correct usage with check and parsing
let result3 = addWithCheck("1", 2); // Correct usage with check and parsing
let result4 = addWithCheck("abc", 2); // Throws Error
console.log(result1, result2, result3, result4); // output 3, 3, 3, error