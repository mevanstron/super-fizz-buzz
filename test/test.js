const assert = require('assert');
const SuperFizzBuzz = require('../classes/SuperFizzBuzz');


describe('SuperFizzBuzz Class', () => {
  let fizzBuzz = new SuperFizzBuzz;

  it('When no default min is provided, SuperFizzBuzz is initialized with a min of 1', () => {
    assert.equal(fizzBuzz.min, 1);
  });
  it('When no default max is provided, SuperFizzBuzz is initialized with a max of 100', () => {
    assert.equal(fizzBuzz.max, 100);
  });
  it('When no default wordNums is provided, SuperFizzBuzz is initialized with wordNums of [{word: "Fizz", num: 3}, {word: "Buzz", num:5}]', () => {
    assert.equal(fizzBuzz.wordNums[0].word, "Fizz");
    assert.equal(fizzBuzz.wordNums[0].num, 3);
    assert.equal(fizzBuzz.wordNums[1].word, "Buzz");
    assert.equal(fizzBuzz.wordNums[1].num, 5);
  });
});
