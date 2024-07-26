// Write a function called arrayIntersection that takes in two arrays and returns an array containing the intersection of the two input arrays (i.e., the common elements that appear in both arrays).

// You could use a for loop to iterate through the first array and check if each element is in the second array using the includes method.

function arrayIntersection(arr1, arr2) {
  const intersection = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !intersection.includes(arr1[i])) {
      intersection.push(arr1[i]);
    }
  }

  return intersection;
}

// You could also take the approach of using a Set to store the elements of the first array and then iterate through the second array and check if each element is in the Set using the has method.

function arrayIntersection(arr1, arr2) {
  const set = new Set(arr1);

  const result = [];

  for (let num of arr2) {
    if (set.has(num)) {
      result.push(num);
    }
  }

  return result;
}

console.log(arrayIntersection([1, 2, 3, 4, 5], [1, 3, 5, 7, 9]));
