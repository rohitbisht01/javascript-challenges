// Write a function called findMaxNumber that takes in an array of numbers and returns the largest number in the array.

function findMaxNumber(arr) {
  let maxNumber = 0;
  arr.forEach((ele) => Math.max(ele, maxNumber));

  return maxNumber;
}

function findMaxNumber(arr) {
  return Math.max(...arr);
}

console.log(findMaxNumber([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
