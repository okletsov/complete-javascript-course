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
    The ternary operator and Switch Statements
*/

/*
var firstName = 'John';
var age = 16;

// Ternary operator
age >= 18 ? console.log(firstName + ' drinks bear') : console.log(firstName + ' drinks juice');

var drink = age >= 18 ? 'bear' : 'juice';
console.log(drink);

// Switch statement

var job = 'teacher';
switch(job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code');
        break;
    case 'driver':
        console.log(firstName + ' drives a car');
        break;
    default:
        console.log(firstName + ' unemployed');
}

age = 10;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager');
        break;
    default:
        console.log(firstName + ' is a man');
}
*/
/************************************
    Truthy and Falsy values and equality operators
*/
/*

// value can be falsy if used for if/else evaluation
// falsy values: undefined, null, 0, '', NaN (not a number)
// truthy values: NOT falsy values

var height = 23; 

if(height || height === 0) { // because 0 is a falsy value here
    console.log('variable is defined');
} else {
    console.log('variable has not been defined');
}

//Equality opertors

if(height == '23') {
    console.log('The == operator does type coercion!');
    // for example 23 == '23' will return true, but 23 === '23' returns false
    // best practice is to use === 
}
*/

/************************************
    Coding chellange 2
*/
/*
var johnGame1 = 116;
var johnGame2 = 94;
var johnGame3 = 123;

var mikeGame1 = 116;
var mikeGame2 = 94;
var mikeGame3 = 123;

var maryGame1 = 97;
var maryGame2 = 04;
var maryGame3 = 105;

var johnAvg = (johnGame1 + johnGame2 + johnGame3) / 3;
var mikeAvg = (mikeGame1 + mikeGame2 + mikeGame3) / 3;
var maryAvg = (maryGame1 + maryGame2 + maryGame3) / 3;

if(johnAvg > mikeAvg && johnAvg > maryAvg) {
    console.log('John\'s team wins.\nMike avg = ' + mikeAvg + '\nJohn avg = ' + johnAvg + '\nMary avg = ' + maryAvg);
} else if(mikeAvg > johnAvg && mikeAvg > maryAvg) {
    console.log('Mike\'s team wins.\nMike avg = ' + mikeAvg + '\nJohn avg = ' + johnAvg + '\nMary avg = ' + maryAvg);
} else if(maryAvg > johnAvg && maryAvg > mikeAvg){
    console.log('Mary\'s team wins.\nMike avg = ' + mikeAvg + '\nJohn avg = ' + johnAvg + '\nMary avg = ' + maryAvg);
} else if (johnAvg === mikeAvg && johnAvg > maryAvg) {
    console.log('John = Mike = ' + johnAvg + ' , Mary = ' + maryAvg);
} else if (johnAvg === maryAvg && johnAvg > mikeAvg) {
    console.log('John = Mary = ' + johnAvg + ' , Mike = ' + mikeAvg);
} else if (maryAvg === mikeAvg && maryAvg > johnAvg) {
    console.log('Mary = Mike = ' + maryAvg + ' , John = ' + johnAvg);
} else {
    console.log('It\'s a draw');
}
*/
/************************************
    Functions
*/
/*
function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
console.log(ageJohn);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if(retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years');
    } else {
        console.log(firstName + ' is already retired');
    }

}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
*/

/************************************
    Function Statements and Expressions
*/

// Function Expression
/*
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' is a teacher';
        case 'driver':
            return firstName + ' is a driver';
        default:
            return firstName + ' is unemployed';
    }
}

console.log(whatDoYouDo('teacher', 'John')); 
*/

/************************************
    Arrays
*/
/*
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
console.log(names);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different data types

var john = ['John', 'Smith', 1990, 'teacher', false];
john.push('blue'); // adding elements to the end of the array
john.unshift('Mr.') // adding elements to the start of the array
john.pop(); // removes element from the end of the array
john.shift(); // removes element from the beginning of the array
console.log(john);

console.log(john.indexOf(1990));

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';
console.log(isDesigner);
*/

/************************************
    Coding chellange 3
*/
/*

var bills = [124, 48, 268];

function calcTip(bill) {
    if(bill < 50) {
        return bill * 0.2;
    } else if(bill >= 50 && bill <= 200) {
        return bill * 0.15;
    } else {
        return bill * 0.1;
    }
}

var tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
var finalAmount = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills);
console.log(tips);
console.log(finalAmount);
*/

/************************************
    Objects and properties
*/

/*
// Initializong an object
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);

var john = {
    firstName: 'John',
    lastName : 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

// Accessing object properties
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

// Mutating object properties
john.job = 'designer';
john['isMarried'] = true;
console.log(john);
*/

/************************************
    Objects and methods
*/

/*
var john = {
    firstName: 'John',
    lastName : 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge();
console.log(john);
*/

/************************************
    Coding chellange 4
*/

/*
var john = {
    fullName: 'John',
    mass: 80,
    height: 1.8,
    calcBmi: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

var mark = {
    fullName: 'Mark',
    mass: 90,
    height: 1.9,
    calcBmi: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

if(john.calcBmi() > mark.calcBmi()) {
    console.log(john.fullName + ' has greater bmi. John = ' + john.bmi + ' , Mark = ' + mark.bmi);
} else if (john.calcBmi() < mark.calcBmi()) {
    console.log(mark.fullName + ' has greater bmi. John = ' + john.bmi + ' , Mark = ' + mark.bmi);
} else {
    console.log('BMIs are equal. John = ' + john.bmi + ' , Mark = ' + mark.bmi);
}
*/

/************************************
    Loops and iterations
*/

/*
for(i = 0; i < 10; i++) {
    console.log(i);
}

var john = ['John', 'Smith', 1990, 'teacher', false];

for(i = 0; i < john.length; i++) {
    console.log(john[i]);
}

var i = 0;
while(i < john.length) {
    console.log(john[i]);
    i++;
}
*/

// continue and break statements

/*
var john = ['John', 'Smith', 1990, 'teacher', false];

for(i = 0; i < john.length; i++) {
    if(typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for(i = 0; i < john.length; i++) {
    if(typeof john[i] !== 'string') break;
    console.log(john[i]);
}
*/

/************************************
    Coding chellange 5
*/

var johnVisit = {
    fullName: 'John',
    bills: [124, 48, 268, 180, 42],
    tips: [],
    finalBills: [],
    calcTips: function() {
        
        for(i = 0; i < this.bills.length; i++) {
            var tip;
            if(this.bills[i] < 50) {
                tip = this.bills[i] * 0.2;
            } else if (this.bills[i] >= 50 && this.bills[i] <= 200) {
                tip = this.bills[i] * 0.15;
            } else {
                tip = this.bills[i] * 0.1;
            }
            this.tips.push(tip);
            this.finalBills.push(tip + this.bills[i]);
        }
        return this.tips;
    }
};


var markVisit = {
    fullName: 'Mark',
    bills: [77, 475, 110, 45],
    tips: [],
    finalBills: [],
    calcTips: function() {
        
        for(i = 0; i < this.bills.length; i++) {
       //     console.log(this.bills.length);
            var tip;
            if(this.bills[i] < 100) {
                tip = this.bills[i] * 0.2;
            } else if (this.bills[i] >= 100 && this.bills[i] <= 300) {
                tip = this.bills[i] * 0.10;
            } else {
                tip = this.bills[i] * 0.25;
            }
            this.tips.push(tip);
            this.finalBills.push(tip + this.bills[i]);
        }
        return this.tips;
    }
};

function calcAvgTip(tips) {
    var tipSum = 0;
    for(i = 0; i < tips.length; i++) {
        tipSum = tipSum + tips[i];
    }
    return tipSum / tips.length;
}

johnVisit.calcTips();
markVisit.calcTips();

console.log(johnVisit);
console.log(markVisit);

var johnAvgTip = calcAvgTip(johnVisit.tips);
var markAvgTip = calcAvgTip(markVisit.tips);

if(johnAvgTip > markAvgTip) {
    console.log('John paied more in tips');
    console.log('John = ' + johnAvgTip);
    console.log('Mark = ' + markAvgTip);
} else if(johnAvgTip < markAvgTip) {
    console.log('Mark paied more in tips');
    console.log('John = ' + johnAvgTip);
    console.log('Mark = ' + markAvgTip);
} else {
    console.log('Both payed same tips');
    console.log('John = ' + johnAvgTip);
    console.log('Mark = ' + markAvgTip);
}

 



