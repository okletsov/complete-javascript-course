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