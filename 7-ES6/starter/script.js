// Lecture: let and const

/**
    let and const are BLOCK-SCOPED
    var is FUNCTOIN-SCOPED
 */

// ES5
/*
var name5 = 'Jane Smith';
var age = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age6 = 23;
// name6 = 'Jane Miller'; // this will give an error
console.log(name6);

// ES5
function driversLicense5(passedTest) {
    if(passedTest) {
        var firstName = 'Juhn';
        var yearOfBirth  = 1990;
    }

    console.log(firstName + ', born in ' + yearOfBirth + ' is now officially allowed to drive a car');
}

driversLicense5(true);

// ES6
function driversLicense6(passedTest) {
    if(passedTest) {
        let firstName = 'Juhn';
        const yearOfBirth  = 1990;
    }

    // console.log(filrstName + ', born in ' + yearOfBirth + ' is now officially allowed to drive a car'); // this will not work because let and const are block-scoped
}

driversLicense6(true);

// ES6 another example
function driversLicense6(passedTest) {
    let firstName;
    // const yearOfBirth; // will not work for const because it has to be initialized (e.g. yearOfBirth = 1990)

    if(passedTest) {
        
        firstName = 'John';
        // yearOfBirth  = 1990;
    }

     // console.log(filrstName + ', born in ' + yearOfBirth + ' is now officially allowed to drive a car'); 
}

driversLicense6(true);

// ES6 another example

let i = 23; // this i is separate from the one in for loop

for(let i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);
*/

/////////////////////////////////
// Lecture: Blocks and IIFEs

//ES6
/*
{
    const a = 1;
    let b = 2;
    var c = 3;
}

// console.log(a + b); // this will not work because above is IIFE
console.log(c);

// ES5
(function() {
    var c = 5;
}) ();

// console.log(c); // this will not work because above is IIFE
*/

/////////////////////////////////
// Lecture: Strings
/*
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;
function calcAge(year) {
    return 2019 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today he is ' + calcAge(yearOfBirth) + '.');

// ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)}.`)

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('J'));
console.log(n.includes('ohn'));
console.log(`${firstName} `.repeat(5));
*/

/////////////////////////////////
// Lecture: Arrow Functions
/*
const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function(cur) {
    return 2019 - cur;
});
console.log(ages5);

// ES6
let ages6 = years.map(cur => 2019 - cur);
console.log(ages6);

ages6 = years.map((cur, index) => `Age element ${index + 1}: ${2019 - cur}`);
console.log(ages6);

ages6 = years.map((cur, index) => {
    const now = new Date().getFullYear();
    const age = now - cur;
    return `Age element ${index + 1}: ${age}`;
});
console.log(ages6);
*/

/////////////////////////////////
// Lecture: Arrow Functions 2
/*

// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        var self = this;
        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is box ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
};

//box5.clickMe();

// ES6
// example 1
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', () => { // arrow function here shares "this" keyword of its surrounding (box6 object)
            var str = 'This is box ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
};

//box6.clickMe();

// example 2
const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        document.querySelector('.green').addEventListener('click', () => { // arrow function here shares "this" keyword of its surrounding (box6 object), but it does not work because clickMe property also uses arrow funciton that in turn shares "this" keyword of its surrounding (global scope)
            var str = 'This is box ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
};

// box66.clickMe();

// example 3
    //ES5
function Person(name) {
    this.name = name;
}

Person.prototype.myFriends5 = function(friends) {
    
    var arr = friends.map(function(cur) {
        return this.name + ' is friends with ' + cur;
    }.bind(this));
    console.log(arr);
}

var friends = ['Oleksii', 'Inga'];
new Person('Sofia').myFriends5(friends);

    //ES6
function Person(name) {
    this.name = name;
}
    
Person.prototype.myFriends6 = function(friends) {
        
    var arr = friends.map(cur => `${this.name} is friends with ${cur}`);
    console.log(arr);
}

new Person('Alexander').myFriends6(friends);
*/

/////////////////////////////////
// Lecture: Destructuring
/*

// ES5

var john5 = ['John', 26];
var name5 = john5[0];
var age5 = john5[1];

// ES6

const [name6, age6] = ['John', 26];
console.log(name6, age6);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
}

const {firstName, lastName} = obj;
console.log(firstName, lastName);

const {firstName: a, lastName: b} = obj;
console.log(a, b);

// returning multiple values from a function

function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age, yearsToRetire] = calcAgeRetirement(1988);
console.log(age, yearsToRetire);
*/

/////////////////////////////////
// Lecture: Arrays
/*
const boxes = document.querySelectorAll('.box');

//ES5

var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function (cur) {
    cur.style.backgroundColor = 'dodgerblue';
});

const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

// ES5

for(var i = 0; i < boxesArr5.length; i++) {
    
    if(boxesArr5[i].className === 'box blue') {
        continue;
    }
    
    boxesArr5[i].textContent = 'I changed to blue!';
}


//ES6
for (const cur of boxesArr6) {
    if(cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I changed to blue!';
}

//ES5 - finding an element with value greater than 18
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur) {
    return cur >= 18;
});
console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

//ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >=18));
*/

/////////////////////////////////
// Lecture: Spread operator - transforms an array into single values
/*
function addFourAges(a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

// ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

//ES6
// can be used when need to call a functoin and pass values of array as arguments
const sum3 = addFourAges(...ages);
console.log(sum3); 

// can be used to join two arrays
const smithFamily = ['John', 'Jane', 'Mark'];
const millerFamily = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...smithFamily, 'Lily', ...millerFamily];
console.log(bigFamily);

// can be used not only for arrays, but for example for node lists
const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');
*/

/////////////////////////////////
// Lecture: Rest parameters - transforms signle values in an array

/*
// can be used to create a function that receives an arbitrary number of arguments
// Rest is used in a function declaratoin
// Spread is used in a function call

//ES5
/*
function isFullAge5() {
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach(function(cur) {
        console.log((2016 - cur) >= 18);
    });
}

isFullAge5(1990, 1999, 1965);
isFullAge5(1990, 1999, 1965, 2016, 1987);

//ES6
function isFullAge6(...years) {
    console.log(years);
    years.forEach(cur => console.log((2016 - cur) >= 18));
}

isFullAge6(1990, 1999, 1965);
*/

/*
// Example 2: when function always has 1 static parameter + random number of parameters
// ES5
function isFullAge5(limit) {
    
    var argsArr = Array.prototype.slice.call(arguments, 1);
    
    console.log(arguments);
    console.log(argsArr);

    argsArr.forEach(function(cur) {
        console.log((2016 - cur) >= limit);
    });
}

isFullAge5(21, 1990, 1999, 1965);
isFullAge5(21, 1990, 1999, 1965, 2016, 1987);

//ES6
function isFullAge6(limit, ...years) {
    console.log(years);
    years.forEach(cur => console.log((2016 - cur) >= limit));
}

isFullAge6(21, 1990, 1999, 1965);
*/

/////////////////////////////////
// Lecture: Default parameters

// ES5
/*
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
    
    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? nationality = 'american' : lastName = lastName;
    
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}
*/
/*
//ES6
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');

*/

/////////////////////////////////
// Lecture: Maps

// Note: maps are similar to objects. The difference is that in object we use only strings as keys. In maps we can use strings, numbers and even objects and functions as keys

const question = new Map();

// Filling a map with data
question.set('question', 'What is the official name of the latest JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer');
question.set(false, 'Wrong, please try again');

// Retreiving data from a map
console.log(question.get('question'));
console.log(question.size);

// Deleting data from a map
if(question.has(4)) {
    // question.delete(4);
    console.log('Answer 4 is here')
}

// question.clear(); // delete everything

// Looping over a map with for each and for of
question.forEach((value, key) => console.log(`This is: ${key}, and it is set to: ${value}`));

for(let [key, value] of question.entries()) {
    if(typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = parseInt(prompt('Write the correct answer'));

console.log(question.get(ans === question.get('correct')));