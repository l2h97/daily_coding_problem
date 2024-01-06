/**
 * Given an integer n, find the next biggest integer with the same number of 1-bits on.
 */

const getNextWeightInt = (number: number) => {
  // rightmost non-training zero
  let rtz = 0;
  let countOnes = 0;

  while (((number >> rtz) & 1) === 1) {
    countOnes++;
    rtz++;
  }

  if (rtz === 0) {
    return number;
  }

  number |= 1 << rtz;
  number &= ~((1 << rtz) - 1);

  number |= (1 << (countOnes - 1)) - 1;

  return number
}

const number1 = 6;
const result1 = getNextWeightInt(number1)
console.log(`input 1: ${number1}, Binary: ${number1.toString(2)}`);
console.log(`result 1: ${result1}, Binary: ${result1.toString(2)}`);

const number2 = 25;
const result2 = getNextWeightInt(number2)
console.log(`number 2: ${number2}, Binary: ${number2.toString(2)}`);
console.log(`result 2: ${result2}, Binary: ${result2.toString(2)}`);

console.log("dasd::", (6 >> 0));
console.log("sdasd::", (6 >> 0).toString(2));


export {}