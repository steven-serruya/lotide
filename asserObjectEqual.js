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

const assertObjectsEqual = function(actual, expected) {
  
};