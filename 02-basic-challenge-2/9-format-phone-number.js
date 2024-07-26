// Write a function called formatPhoneNumber that takes in an array of numbers and returns a string representing the phone number formed by concatenating the numbers in the specified format.

// You can use the Array.join method to concatenate the numbers in the array.
// You can use the Array.slice method to get a subset of the array.

function formatPhoneNumber(numbers) {
  const areaCode = numbers.slice(0, 3).join("");
  const prefix = numbers.slice(3, 6).join("");
  const lineNumber = numbers.slice(6).join("");

  return `(${areaCode}) ${prefix}-${lineNumber}`;
}

function formatPhoneNumber(numbers) {
  const formatted = numbers.join("");
  return `(${formatted.substring(0, 3)}) ${formatted.substring(
    3,
    6
  )}-${formatted.substring(6)}`;
}

const formatPhoneNumber = (numbers) =>
  `(${numbers.slice(0, 3).join("")}) ${numbers.slice(3, 6).join("")}-${numbers
    .slice(6)
    .join("")}`;

console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
