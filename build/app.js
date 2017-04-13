// Note: Look in src/app.js to see ES6 code, if applicable 

'use strict';

var odds = [2, 4, 6, 8, 10, 12].map(function (v) {
    return v + 1;
});

var reduction = [2, 4, 6, 8, 10, 12].reduce(function (acc, val) {
    return acc + val;
});

var person = {
    name: 'Doug Funny',
    sayName: function sayName() {
        console.log('My name is ' + this.name + '.');
    },

    hobbies: ['friends', 'The Beets', 'comics'],
    showHobbies: function showHobbies() {
        var _this = this;

        // Arrow functions allow for lexical scoping; otherwise, you have to create: var _this = this; to reference parent
        this.hobbies.forEach(function (element) {
            console.log(_this.name + ' likes ' + element + '.');
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
var sum = function sum() {
    return Array.prototype.reduce.call(arguments, function (prev, curr) {
        return prev + curr;
    });
};

console.log(sum(2, 3, 4, 5, 6, 7));

// The triple dots ( ... ) are the rest parameters
// They take the "rest" of the parameters and create an array of them
var sumTwo = function sumTwo() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    // triple dots ( ... ) are not needed at this point
    return args.reduce(function (prev, curr) {
        return prev + curr;
    });
};

console.log(sumTwo(2, 3, 4, 5, 6, 7));

var multiply = function multiply(mul) {
    for (var _len2 = arguments.length, numbers = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        numbers[_key2 - 1] = arguments[_key2];
    }

    return numbers.map(function (n) {
        return mul * n;
    });
};

console.log(multiply(2, 7, 4, 7));

// Spread operator 

var numbers = [4, 6, 3, 8, 10, 14];
// Without the spread operator, this is what you do to find maximum value from an array
var max = Math.max.apply(null, numbers);

console.log(max);

// With spread
// Note: spread and rest look alike; one combines the "rest" of the arguments; the other "spreads" them out
var numbers2 = [4, 6, 3, 8, 10, 16];

var max2 = Math.max.apply(Math, numbers2);

console.log(max2);

// Destructuring 

var human = {
    name: '007',
    location: 'Secret'
};

human.name; // 007
human['name']; // 007

// Key is on left; new variable is on right . . . person = object
var humanName = human.name,
    currentLocation = human.location;


console.log(humanName, currentLocation);

var nums = [1, 2, 3, 4];

// To skip a value, put a comma in it's position
var first = nums[0],
    second = nums[1],
    fourth = nums[3];


console.log(first, second, fourth);