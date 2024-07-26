// Write a function called reverseString that takes in a string and returns the reverse of that string. In this section, we are really focusing on loops without using any built-in methods, so try that first. If you get stuck, you can always use the built-in methods to solve the problem.

function reverseString(str) {
  let low = 0,
    high = str.length() - 1;

  while (low <= high) {
    let temp = str[low];
    str[low] = str[high];
    str[high] = temp;
  }

  return str;
}

function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

// using split, reverse and join

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));
