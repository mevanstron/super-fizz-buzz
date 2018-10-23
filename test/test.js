const assert = require('assert');
const SuperFizzBuzz = require('../classes/SuperFizzBuzz');


describe('SuperFizzBuzz Class', function() {
  describe('Default Initialization', function() {
    let defaultFizzBuzz = new SuperFizzBuzz;

    it('When no default min is provided, SuperFizzBuzz is initialized with a min of 1', function() {
      assert.equal(defaultFizzBuzz.min, 1);
    });
    it('When no default max is provided, SuperFizzBuzz is initialized with a max of 100', function() {
      assert.equal(defaultFizzBuzz.max, 100);
    });
    it('When no default wordNums is provided, SuperFizzBuzz is initialized with wordNums of [{word: "Fizz", num: 3}, {word: "Buzz", num:5}]', function() {
      assert.equal(defaultFizzBuzz.wordNums[0].word, "Fizz");
      assert.equal(defaultFizzBuzz.wordNums[0].num, 3);
      assert.equal(defaultFizzBuzz.wordNums[1].word, "Buzz");
      assert.equal(defaultFizzBuzz.wordNums[1].num, 5);
    });
  });

  describe('Initialized with Arguments', function() {
    let advancedFizzBuzz = new SuperFizzBuzz(-12, 145, null, [{word: "Fizz", num: 3}, {word: "Buzz", num:7}, {word: "Bazz", num:38}]);

    it('When min is provided, SuperFizzBuzz is initialized with that value instead of the default', function() {
      assert.equal(advancedFizzBuzz.min, -12);
    });
    
  });
});
