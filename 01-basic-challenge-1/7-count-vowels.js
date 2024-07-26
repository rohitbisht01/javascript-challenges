// Write a function called countVowels that takes in a string and returns the number of vowels in the string.

function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let cnt = 0;
  const charArr = str.toLowerCase().split("");

  charArr.forEach((ele) => {
    if (vowels.includes(ele)) {
      cnt++;
    }
  });

  return cnt;
}

console.log(countVowels("mississippi"));
