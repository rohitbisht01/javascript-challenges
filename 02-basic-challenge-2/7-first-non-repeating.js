// Write a function called findFirstNonRepeatingCharacter that takes in a string and returns the first non-repeating character in the string.
// If there are no non-repeating characters, the function should return null.

// You can use an object or a map to keep track of the number of times each character appears in the string.

function findFirstNonRepeatingCharacter(str) {
  const charCount = new Map();

  for (const char of str) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  for (const char of str) {
    if (charCount.get(char) === 1) {
      return char;
    }
  }

  return null;
}

// You can iterate through the string and check if the current character has only appeared once.
function findFirstNonRepeatingCharacter(str) {
  const charCount = {};

  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null;
}
