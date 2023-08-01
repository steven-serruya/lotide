const middle = require("../middle");
const eqArrays = require("../eqArrays");

let arr1 = [1, 4, 34, 6, 1];
let arr2 = [3, 56, 12, 56, 34, 1, 2, 6, 7];

console.log(middle(arr1));
console.log(middle(arr2));

eqArrays(arr1, arr2);