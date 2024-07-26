// Write a function called countOccurrences() that takes in a string and a character and returns the number of occurrences of that character in the string.

function countOccurrences(str, ch) {
  let count = 0;
  for (let i = 0; i < str.length(); i++) {
    if (ch === str[i]) count++;
  }

  return count;
}

// if case sensitive => convert str and ch into lowercase or uppercase
function countOccurrences(str, ch) {
  const updatedStr = str.toLowerCase();
  const updatedChar = ch.toLowerCase();
  let count = 0;
  for (let i = 0; i < updatedStr.length(); i++) {
    if (updatedChar === updatedStr[i]) count++;
  }

  return count;
}

// use split function
// Since splitting the string removes the character, the resulting array will have one less element than the number of occurrences of the character.
const countOccurrences = (str, char) => str.split(char).length - 1;
