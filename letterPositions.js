const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  return results;
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};


const assertArraysEqual = function(actual, expected) {
  const isEqual = eqArrays(actual, expected);
  const message = isEqual ? "✅ Arrays are equal." : "🛑 Arrays are NOT equal.";
  console.log(message);
};

const testString = "hello";
const positions = letterPositions(testString);
assertArraysEqual(positions['h'], [0]);
assertArraysEqual(positions['e'], [1]);
assertArraysEqual(positions['l'], [2, 3]);
assertArraysEqual(positions['o'], [4]);