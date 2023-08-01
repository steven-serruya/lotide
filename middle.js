const eqArrays = require("./eqArrays");


const assertArraysEqual = require("./assertArraysEqual");

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


module.exports = middle;