module.exports = class SuperFizzBuzz {
  constructor(min = 1, max = 100, integerSet, wordNums = [{word: "Fizz", num: 3}, {word: "Buzz", num:5}]
  ) {
    let initRange = (min, max) => Array.from({ length: (max + 1) - min}, (_, i) => min + i);

    this.min = min;
    this.max = max;
    this.integerSet = integerSet || initRange(min, max);
    this.wordNums = wordNums;
  }

  setRange(min, max) {
    return this.integerSet = Array.from({ length: (max + 1) - min}, (_, i) => min + i);
  }

  output() {
    this.integerSet.map(v => {
      let word = "";

      this.wordNums.map(m =>  v % m.num == 0 ? word += m.word : null);

      console.log(word ? word : v)
    });
  }
}
