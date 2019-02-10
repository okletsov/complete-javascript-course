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

const boxes = document.querySelectorAll('.box');

//ES5

var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function (cur) {
    cur.style.backgroundColor = 'dodgerblue';
});

const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

// ES5
/*
for(var i = 0; i < boxesArr5.length; i++) {
    
    if(boxesArr5[i].className === 'box blue') {
        continue;
    }
    
    boxesArr5[i].textContent = 'I changed to blue!';
}
*/

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