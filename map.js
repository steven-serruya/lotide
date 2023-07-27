const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const assertArraysEqual = function(actual, expected) {
  const isEqual = eqArrays(actual, expected);
  const message = isEqual ? "✅ Arrays are equal." : "🛑 Arrays are NOT equal.";
  console.log(message);
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
//test case 1
const toUpperCase = word => {
  return word.toUpperCase();
};
let mappedWordsResult1 = map(words, toUpperCase);
let expected1 = words.map((element) => {
  return element.toUpperCase();
});
assertArraysEqual(mappedWordsResult1, expected1);

// test case 2
const getWordLength = word => {
  return word.length;
};
let mappedWordsResult2 = map(words, getWordLength);
let expected2 = words.map((element) => {
  return element.length;
});
assertArraysEqual(mappedWordsResult2, expected2);

//test case 3
const addBigToWord = word => {
  return "Big " + word;
};
let mappedWordsResult3 = map(words, addBigToWord);
let expected3 = words.map((element) => {
  return "Big " + element;
});
assertArraysEqual(mappedWordsResult3, expected3);


const results1 = map(words, word => word[0]);
console.log(results1);
