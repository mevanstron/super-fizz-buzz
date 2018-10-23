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
    let advancedFizzBuzz = new SuperFizzBuzz(-12, 145, null, [{word: "Frog", num: 5}, {word: "Bat", num:11}, {word: "Umbrella", num:38}]);

    it('When min is provided, SuperFizzBuzz is initialized with that value instead of the default', function() {
      assert.equal(advancedFizzBuzz.min, -12);
    });
    it('When max is provided, SuperFizzBuzz is initialized with that value instead of the default', function() {
      assert.equal(advancedFizzBuzz.max, 145);
    });
    it('When wordNums is provided, SuperFizzBuzz is initialized with that value instead of default', function() {
      assert.equal(advancedFizzBuzz.wordNums[0].word, "Frog");
      assert.equal(advancedFizzBuzz.wordNums[0].num, 5);
      assert.equal(advancedFizzBuzz.wordNums[1].word, "Bat");
      assert.equal(advancedFizzBuzz.wordNums[1].num, 11);
      assert.equal(advancedFizzBuzz.wordNums[2].word, "Umbrella");
      assert.equal(advancedFizzBuzz.wordNums[2].num, 38);
    });
  });
});
