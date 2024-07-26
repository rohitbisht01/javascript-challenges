// Write a function called validateEmail that takes in a string and returns whether the string is a valid email address. For the purposes of this challenge, a valid email address is defined as a string that contains an @ symbol and a . symbol.

// Regex Expression

/* 
^ asserts the start of the string.
[A-Za-z0-9._%+-]+ matches one or more occurrences of letters (both uppercase and lowercase), digits, dots, underscores, percent signs, plus signs, and hyphens. This represents the local part of the email address before the "@" symbol.
@ matches the "@" symbol.
[A-Za-z0-9.-]+ matches one or more occurrences of letters, digits, dots, and dashes. This represents the domain name of the email address.
. matches the dot (".") character. It needs to be escaped with a backslash because the dot has a special meaning in regular expressions.
[A-Za-z]{2,} matches two or more occurrences of letters. This represents the top-level domain (TLD) of the email address.
$ asserts the end of the string.
*/

function validateEmail(email) {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(email);
}

// not using regex expression
function validateEmail(email) {
  if (email.indexOf("@") === -1) {
    return false;
  }

  const [localPart, domain] = email.split("@");

  if (localPart.length === 0 || domain.length < 3) {
    return false;
  }

  const domainExtension = domain.split(".");
  if (
    domainExtension.length < 2 ||
    domainExtension[domainExtension.length - 1].length < 2
  ) {
    return false;
  }

  return true;
}

console.log(validateEmail("john@gmail.com"));
console.log(validateEmail("john@gmail"));
