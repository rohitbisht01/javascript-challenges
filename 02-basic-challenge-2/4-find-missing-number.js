// Write a function called findMissingNumber that takes in an array of unique numbers from 1 to n (inclusive), where one number is missing. It should return the missing number.

function findMissingNumber(arr) {
  const sortedArr = arr.sort((a, b) => a - b); // ascending order
  for (let i = 1; i <= sortedArr.length; i++) {
    if (sortedArr[i - 1] !== i) {
      return i;
    }
  }

  // If no number is missing, return the next number after the last element
  return sortedArr.length + 1;
}

console.log(findMissingNumber([10, 5, 1, 2, 4, 6, 8, 3, 9]));
