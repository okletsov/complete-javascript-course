/************************************
    Variables and data types
*/
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

var _3years = 3;
*/

/************************************
    Variable mutation and type coercion 
*/

/*
var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his name?');
console.log(firstName + ' ' + lastName);
*/

/************************************
    Basic operators 
*/

// Math operators
/*
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;
yearJohn = now - ageJohn;
yearMark = now - ageMark;
console.log(yearJohn);
console.log(now + 2);

// Logical operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

//typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log('Some text');
var x;
console.log(typeof x);
*/

/************************************
    Operators precedence
*/
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

//Multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);


// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x,y;
x = y = (3 + 5) * 4 - 6; // 26
console.log(x, y);

//More operators
x = x * 2;
x *= 2;
*/

/************************************
    Coding chellange
*/
 /*
var massJohn, massMark, heightJohn, heightMark, bmiJohn, bmiMark, isMarkBmiHigher;
massJohn = 80;
massMark = 70;
heightJohn = 1.8;
heightMark = 1.96;

bmiJohn = massJohn / (heightJohn * 2);
bmiMark = massMark / (heightMark * 2);

isMarkBmiHigher = bmiMark > bmiJohn
console.log(bmiMark);
console.log(bmiJohn);
console.log("Is Mark's BMI higher than John's? " + isMarkBmiHigher);
*/

/************************************
    If / else statements
*/
/*
var firstName = 'John';
var civilStatus = 'single';

if(civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}
*/

/************************************
    Boolean logic
*/

