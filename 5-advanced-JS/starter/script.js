// Function constructor

/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    console.log(2019 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/

// Object.create

/*
var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBirth: {value: 1969},
    job: {value: 'designer'}
});
*/

// Primitives vs Objects

/*
// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

// Objects
var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// Function

var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);
*/

// Passing functoins as arguments

/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) { // passing function as an argument of another functoin
    var arrRes = [];
    for(var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calcAge(yearOfBirth) {
    return 2019 - yearOfBirth;
}

function isFullAge(age) {
    return age >= 18;
}

function maxHeartRate(age) {
    if(age >= 18 && age <= 81) {
        return Math.round(206.9 - (0.67 * age));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calcAge);
console.log(ages);

var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);

var heartRates = arrayCalc(ages, maxHeartRate);
console.log(heartRates);
*/

// Functions returning functoins

/*
function interviewQuestion(job) {
    if(job === 'designer') {
        return function(name) {
            console.log(name + ' can you explain what UX design is?');
        }
    } else if(job === 'teacher') {
        return function(name) {
            console.log('What subjet do you teach, ' + name + '?');
        }
    } return function(name) {
        console.log('Hello, ' + name + ', what do you do?');
    }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('John');

var designerQuestion = interviewQuestion('designer');
designerQuestion('Mark');

interviewQuestion('teacher')('Jane');
*/

// IIFE

/*
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

(function() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}) ();


(function(goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
}) (2);
*/

// Closures

/*
function retirement(retirementAge) {
    var a = ' years until retirement.';
    return function(yearOfBirth) {
        var age = 2019 - yearOfBirth;
        console.log((retirementAge - age) +a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);

function interviewQuestion(job) {
    return function(name) {
        if(job === 'designer') {
            console.log(name + ', can you explain what UX design is?');
        } else if(job === 'teacher') {
            console.log('What subjet do you teach, ' + name + '?');
        } else {
            console.log('Hello, ' + name + ', what do you do?');
        }
    }
}

interviewQuestion('teacher')('John');
interviewQuestion('designer')('Mark');
interviewQuestion('driver')('Jane');
*/

// Bind, call and apply

/*
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ' ladies and gentelmen! I\'m ' + this.name + '. I\'m ' + this.age + ' years old ' + this.job + '!');
        } else if(style === 'friendly') {
            console.log('What\'s up? I\'m ' + this.name + '. I\'m ' + this.age + ' years old ' + this.job + '! Have a nice ' + timeOfDay + '!');
        }
    }
};

var emily = {
    name: 'Emily',
    age: 30,
    job: 'designer'
};

john.presentation('formal', 'morning');
john.presentation.call(emily, 'friendly', 'afternoon');
john.presentation.apply(emily, ['formal', 'evening']);

var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('morning');


var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) { // passing function as an argument of another functoin
    var arrRes = [];
    for(var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calcAge(yearOfBirth) {
    return 2019 - yearOfBirth;
}

function isFullAge(limit, age) {
    return age >= limit;
}

var ages = arrayCalc(years, calcAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
*/

// Coding chellange 7

(function game() {
    var Question = function(questoin, answers, correctAnswer) {
        this.question = questoin,
        this.answers = answers,
        this.correctAnswer = correctAnswer
    }
    
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
        for(var i = 0; i < this.answers.length; i++) {
            console.log(i + ':' + this.answers[i]);
        }
    }
    
    var firstQuestion = new Question('What is the best programming language in the world?', ['Java', 'JavaScript', 'Ruby'], 1);
    var secondQuestion = new Question('How would you describe programming?', ['Fun', 'Boring', 'Tedious'], 0);
    var thirdQuestion = new Question('What is my name?', ['Inga', 'Sofia', 'Oleksii'], 2);
    
    var questions = [firstQuestion, secondQuestion, thirdQuestion];
    var answer;
    var score = 0;
    
    while(answer != 'exit') {
        var questionNumber = Math.floor((Math.random()) * 3);
        questions[questionNumber].displayQuestion();
        
        answer = prompt('Please select the correct answer(just type the number). Or type exit to quit');
        
        if(answer == questions[questionNumber].correctAnswer) {
            score++;
            console.log('Correct answer!');
            console.log('Your current score is: ' + score);
            console.log('--------------------------------------');
        } else if(answer == 'exit') {
            console.log('Quiting the game');
        } else {
            console.log('Incorrect answer :(');
            console.log('Your current score is: ' + score);
        }
    }
}) ();
