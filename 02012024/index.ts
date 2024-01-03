/**
 * Given a list of integers and a number K, return which contiguous elements of the list sum to K.
*/

const findContiguous = (arr: number[], number: number): number[] => {
  let sum = 0;
  let chooseIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    
    while (sum > number && chooseIndex < i) {
      sum -= arr[chooseIndex];
      chooseIndex += 1;
    }

    if (sum === number) {
      return arr.slice(chooseIndex, i + 1)
    }
  }

  console.log("sum::", sum);
  

  return [];
};

const arr1 = [1, 2, 3, 4, 5];
const number1 = 9;
console.log('findContiguous::test case 1', findContiguous(arr1, number1));

const arr2 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 5];
const number2 = 9;
console.log('findContiguous::test case 2', findContiguous(arr2, number2));

export {}
