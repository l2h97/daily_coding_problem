/** 
  * Starting from 0 on a number line, you would like to make a series of jumps that lead to the integer N.

  * On the ith jump, you may move exactly i places to the left or right.

  * Find a path with the fewest number of jumps required to get from 0 to N.
*/


const findMinJumps = (number: number) => {
  let sum = 0
  let jumpNo = 1;

  while (sum < number || (sum - number) % 2 != 0) {
    sum += jumpNo;
    jumpNo++;
  }

  return jumpNo - 1;
}


const number1 = 19;
console.log(findMinJumps(number1));

const number2 = 5;
console.log(findMinJumps(number2));


export {}
