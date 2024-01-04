/**
 * Given an array of integers, find the first missing positive integer in linear time and constant space.
 * In other words, find the lowest positive integer that does not exist in the array. 
 * The array can contain duplicates and negative numbers as well.
 */

const findPositiveNumber = (arr: number[]) => {
  const newArr = arr.map((i) => Math.abs(i))
  newArr.sort((a, b) => a - b);
  
  let max = newArr[0]
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] > max) {
      return max
    }

    max = newArr[i] + 1
  }

  return max
}

const arr1 = [3, 4, -1, 1];
console.log(findPositiveNumber(arr1));

const arr2 = [1, 2, 3];
console.log(findPositiveNumber(arr2));

export {}