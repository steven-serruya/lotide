// const assertEqual = require('../assertEqual');
// const tail = require('../tail');

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]);

const assert = require('chai').assert;
const { expect } = require('chai');
const tail = require("../tail");
describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    // Call the tail function with the array as an argument
    const result = tail(['Hello', 'Lighthouse', 'Labs']);

    assert.deepEqual(result, ['Lighthouse', 'Labs']);

  });
});