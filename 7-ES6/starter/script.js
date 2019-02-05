// Lecture: let and const

/**
    let and const are BLOCK-SCOPED
    var is FUNCTOIN-SCOPED
 */

// ES5
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