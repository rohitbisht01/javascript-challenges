// Write a function called removeDuplicates that takes in an array and returns a new array with duplicates removed.

function removeDuplicates(arr) {
  const uniqueArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }

  return uniqueArr;
}

// use set
// We take in an array with duplicates and we create a new Set from that array. We then convert that Set back into an array and return it.

function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}

console.log(
  removeDuplicates([1, 2, 3, 4, 5, true, 1, "hello", 2, 3, "hello", true])
);
