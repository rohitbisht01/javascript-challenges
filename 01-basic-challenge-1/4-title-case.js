// Write a function called titleCase that takes in a string and returns the string with the first letter of each word capitalized.

function titleCase(str) {
  let words = str.toLowerCase().split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  return words.join(" ");
}

// use regex expression
function titleCase(str) {
  return str.replace(/\b\w/g, (match) => match.toUpperCase());
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));

/* 
REGEX EXPLANATION

The regex /\b\w/g matches the first letter of each word.

\b matches the word boundary
\w matches the first letter of each word
The g flag is used to replace all occurrences of the regex in the string
*/
