function generateRandomNumberExcluding(n: number, l: number[]): number {
  const availableNumbers: number[] = [];

  // Populate availableNumbers with numbers not in the list
  for (let i = 0; i < n; i++) {
    if (!l.includes(i)) {
      availableNumbers.push(i);
    }
  }

  // If all numbers are in the list, return -1 or handle as needed
  if (availableNumbers.length === 0) {
    return -1; // No available numbers
  }

  // Generate a random index and return the corresponding number
  const randomIndex = Math.floor(Math.random() * availableNumbers.length);
  return availableNumbers[randomIndex];
}

// Example usage
const n: number = 10;
const exclusionList: number[] = [2, 5, 8];

const randomNum = generateRandomNumberExcluding(n, exclusionList);
console.log(`Random number: ${randomNum}`);