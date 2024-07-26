// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. An example of a palindrome is "madam".

/* 
Remember, you want to remove any non-alphanumeric characters from the string before comparing it to the reversed string. There are multiple ways to do this, but one way is to use the replace method with a regular expression of /[^a-z0-9]/g.
*/

function isPalindrome(str) {
  const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedStr = formattedStr.split("").reverse().join("");
  return formattedStr === reversedStr;
}

// another approach

function isPalindrome(str) {
  const formattedStr = removeNonAlphanumeric(str.isLowerCase());
  const reversedStr = reverseString(formattedStr);
  return formattedStr === reversedStr;
}

function removeNonAlphanumeric(str) {
  let formattedStr = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (isAlphaNumeric(char)) {
      formattedStr += char;
    }
  }

  return formattedStr;
}

function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);

  return (
    (code >= 48 && code <= 57) || // numbers 0-9
    (code >= 97 && code <= 122) // lowercase characters a-z
  );
}

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

console.log(isPalindrome("madam"));
