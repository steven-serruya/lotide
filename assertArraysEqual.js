const eqArrays = require("./eqArrays");

const assertArraysEqual = function(actual, expected) {
  const isEqual = eqArrays(actual, expected);
  const message = isEqual ? "✅ Arrays are equal." : "🛑 Arrays are NOT equal.";
  console.log(message);
};
module.exports = assertArraysEqual



