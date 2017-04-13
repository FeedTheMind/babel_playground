// Note: Look in src/app.js to see ES6 code, if applicable 

'use strict';

let odds = [2, 4, 6, 8, 10, 12].map(v => v + 1);

let reduction = [2, 4, 6, 8, 10, 12].reduce((acc, val) => {
  return acc + val;
});

let person = {
  name: 'Doug Funny',
  sayName() {
    console.log(`My name is ${this.name}.`);
  },
  hobbies: ['friends', 'The Beets', 'comics'],
  showHobbies() {
      // Arrow functions allow for lexical scoping; otherwise, you have to create: var _this = this; to reference parent
    this.hobbies.forEach((element) => {
      console.log(`${this.name} likes ${element}.`);
    });
  }
};

console.log(odds);
console.log(reduction);
person.sayName();
person.showHobbies();


// Spread Operators and Rest Parameters src/app.js

// arguments keyword is lexically scoped, like "this"
// Look in src/app.js to see example
    // This is what it looks like without rest parameters
let sum = function () {
    return Array.prototype.reduce.call(arguments, (prev, curr) => {
        return prev + curr;
    });
};

console.log(sum(2, 3, 4, 5, 6, 7));

// The triple dots ( ... ) are the rest parameters
    // They take the "rest" of the parameters and create an array of them
let sumTwo = function(...args) {
    // triple dots ( ... ) are not needed at this point
    return args.reduce((prev, curr) => prev + curr);
};

console.log(sumTwo(2, 3, 4, 5, 6, 7));

let multiply = (mul, ...numbers) => {
    return numbers.map((n) => {
        return mul * n;
    });
};

console.log(multiply(2, 7, 4, 7));


// Spread operator 

let numbers = [4, 6, 3, 8, 10, 14];
// Without the spread operator, this is what you do to find maximum value from an array
let max = Math.max.apply(null, numbers);

console.log(max);

// With spread
// Note: spread and rest look alike; one combines the "rest" of the arguments; the other "spreads" them out
let numbers2 = [4, 6, 3, 8, 10, 16];

let max2 = Math.max(...numbers2);

console.log(max2);


// Destructuring 

let human = {
    name: '007',
    location: 'Secret'
};

human.name; // 007
human['name']; // 007

// Key is on left; new variable is on right . . . person = object
let { name: humanName, location: currentLocation } = human;

console.log(humanName, currentLocation);

let nums = [1, 2, 3, 4];

// To skip a value, put a comma in it's position
let [first, second,, fourth] = nums;

console.log(first, second, fourth);
