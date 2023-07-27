const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    
    return false;
  }

  for (let key of keys1) {
    let value1 = object1[key];
    let value2 = object2[key];

    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        
        return false;
      
      }
    } else {
      if (value1 !== value2) {
        
        return false;
      }
    }

  }
  
  return true;

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

const assertObjectsEqual = function(actual, expected) {
  const isEqual = eqObjects(actual, expected);
  const inspect = require('util').inspect;
  const message = isEqual? `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`
  console.log(message);
};

const obj1 = { colors: ["red", "blue"], size: "medium" };
const obj2 = { size: "medium", colors: ["red", "blue"] };
assertObjectsEqual(obj1, obj2); // Output: ✅✅✅ Assertion Passed: { colors: [ 'red', 'blue' ], size: 'medium' } === { size: 'medium', colors: [ 'red', 'blue' ] }

const obj3 = { colors: ["red", "blue"], size: "medium" };
const obj4 = { colors: ["red", "blue"], size: "large" };
assertObjectsEqual(obj3, obj4); // Output: 🛑🛑🛑 Assertion Failed: { colors: [ 'red', 'blue' ], size: 'medium' } !== { colors: [ 'red', 'blue' ], size: 'large' }
