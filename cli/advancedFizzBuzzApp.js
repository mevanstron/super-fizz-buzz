const SuperFizzBuzz = require('../classes/SuperFizzBuzz');

let fizzBuzz = new SuperFizzBuzz(-12, 145, null, [{word: "Fizz", num: 3}, {word: "Buzz", num:7}, {word: "Bazz", num:38}]);

console.log("Advanced FizzBuzz");
fizzBuzz.output();
