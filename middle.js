const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }

    return true;
  }
};

const assertArraysEqual = function(actual, expected) {
  const isEqual = eqArrays(actual, expected);
  const message = isEqual ? "✅ Arrays are equal." : "🛑 Arrays are NOT equal.";
  console.log(message);
};

const middle = function(arr) {
  let halfOfIndex = arr.length / 2;
  let returnedArray = [];

  if (arr.length % 2 === 0) {
    // Even-length array, push the middle two elements
    returnedArray.push(arr[halfOfIndex - 1], arr[halfOfIndex]);
  } else {
    // Odd-length array, push the single middle element
    let middleIndex = Math.floor(halfOfIndex);
    returnedArray.push(arr[middleIndex]);
  }

  return returnedArray;
};


