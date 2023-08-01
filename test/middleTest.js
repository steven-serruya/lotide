const middle = require("../middle");
const eqArrays = require("../eqArrays");
const assert = require('chai').assert;
const { expect } = require('chai');
let arr1 = [1, 4, 34, 6, 1];
let arr2 = [3, 56, 12, 56, 34, 1, 2, 6, 7];

console.log(middle(arr1));
console.log(middle(arr2));

eqArrays(arr1, arr2);

describe("#middle", () => {
  it("returns 34 for [1, 4, 34, 6, 1]", () => {

    const results1 = middle([1, 4, 34, 6, 1]);
    assert.deepEqual(results1, [34]);


  });
  it("returns 34 for [3, 56, 12, 56, 34, 1, 2, 6, 7]", () => {

    const results2 = middle([3, 56, 12, 56, 34, 1, 2, 6, 7]);


    assert.deepEqual(results2, [34]);
  });
});