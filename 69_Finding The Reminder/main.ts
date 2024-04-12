//making a function dividing two numbers to find onw quotient and one remainder
function divideAndRemainder(
  dividend: number,
  divisor: number
): { quotient: number; remainder: number } {
  let quotient = Math.floor(dividend / divisor);
  let remainder = dividend % divisor;
  return { quotient, remainder };
}
console.log(divideAndRemainder(25, 6));
