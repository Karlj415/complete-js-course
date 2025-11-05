// 'use strict';
//
// /*
// function fruitProcessor(apples, oranges) {
//     const juice = `One juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }
//
// let appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log();
// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);
// console.log();
// const num = Number('23');
//
// // function declaration. can be called and turned into a variable before its defined
// const age1 = calcAge1(1994);
// console.log(age1);
//
// function calcAge1(birthYear) {
//     return 2025 - birthYear;
// }
//
//
// // function expression
// const calcAge2 = function (birthYear) {
//     return 2025 - birthYear;
// };
// const age2 = calcAge2(1989);
// console.log(age2);
//
// // arrow functions
// let currentYear = 2025;
//
// const calcAge3 = birthYear => currentYear - birthYear;
// const age3 = calcAge3(1994);
// console.log(age3);
//
// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = currentYear - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// };
//
// console.log(yearsUntilRetirement(1994));
// console.log(yearsUntilRetirement(1994, 'Karl'));
//
// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }
//
// const fruitProcessor = function (apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `One juice with ${applePieces} apple slices and ${orangePieces} orange slices`;
//     return juice;
// };
//
// const cutFruits = fruitProcessor(2, 3);
// console.log(cutFruits);
//
// const calcAge = function (birthYear) {
//     return 2025 - birthYear;
// };
//
// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;
//     if (retirement > 0) {
//         return `${firstName} retires in ${retirement} years`;
//     } else {
//         return `${firstName} can already retire`;
//     }
//
// };
//
// function consoleLoggers() {
//     const karlRetire = yearsUntilRetirement(1994, 'Karl');
//     const andrewRetire = yearsUntilRetirement(1990, 'Andrew');
//     const amyRetire = yearsUntilRetirement(1989, 'Amy');
//     const sawyerRetire = yearsUntilRetirement(2021, 'Sawyer');
//     console.log(andrewRetire);
//     console.log(karlRetire);
//     console.log(amyRetire);
//     console.log(sawyerRetire);
// }
//
// consoleLoggers();
//
//
// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));
//
// let scoreDolphins = Math.floor(calcAverage(1144, 23, 71));
// let scoreKoalas = Math.floor(calcAverage(22165, 1541, 349));
// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win! Score: ${scoreDolphins}`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win! Score: ${scoreKoalas}`);
//     } else {
//         console.log(`No winner, Dolphins score: ${scoreDolphins} and score Koalas: ${scoreKoalas}. Neither is double
// the score of the other.`); } }; checkWinner(scoreDolphins, scoreKoalas); scoreDolphins = Math.floor(calcAverage(22,
// 3, 15)); scoreKoalas = Math.floor(calcAverage(11, 13, 11)); checkWinner(scoreDolphins, scoreKoalas);  scoreKoalas =
// Math.floor(calcAverage(11, 13, 11)); scoreDolphins = Math.floor(calcAverage(22, 3, 1511));
// checkWinner(scoreDolphins, scoreKoalas);    const friend1 = 'Michael'; const friend2 = 'Steven'; const friend3 =
// 'Peter';  const friends = ['Michael', 'Steven', 'Peter']; console.log(friends[0]); console.log(friends);
// console.log(friends.length); console.log(friends[friends.length - 1]); friends[2] = 'Jay'; console.log(friends);
// const firstName = 'Karl'; const kj = [firstName, 'Jung', 2025 - 1994, 'Programmer', friends]; console.log(kj); //
// 1st index selects the friend's array, and the second index selects the first value in the array
// console.log(kj[4][2]);  const calcAge = function (birthYear) { return 2025 - birthYear; };  const years = [1990,
// 1994, 2021, 1950];  console.log(calcAge(years[1]));  const age1 = calcAge(years[0]); const age2 = calcAge(years[1]);
// const age3 = calcAge(years[2]); const age4 = calcAge(years[3]); console.log(age1, age2, age3, age4);  */  const
// friends = ['Michael', 'Steven', 'Peter']; // Push adds an element to the end friends.push('Jay');
// console.log(friends); const newLength = friends.push('Jay'); // unshift adds an element to the beginning
// console.log(newLength); // Logs length of the array friends.unshift('John'); console.log(friends); // pop removes an
// element from the end friends.pop(); console.log(friends); const friendsPopped = friends.pop();
// console.log(friendsPopped); // shift removes the first element friends.shift(); console.log(friends); // indexof
// gives you index of selected element console.log(friends.indexOf('Steven')); // include returns true or false with
// strict equality console.log(friends.includes('Steven')); console.log(friends.includes('Karl'));

/* Write your code below. Good luck! 🙂 */

// function calcTip(bill) {
//     let tip;
//     if (bill >= 50 && bill <= 300) {
//         tip = bill * 0.15;
//     } else {
//         tip = bill * 0.20;
//     }
//     return tip;
// }
//
// // Test the function
// const testBill = 100;
// console.log(`Test bill: $${testBill}, Tip: $${calcTip(testBill)}`);
//
// // Bills array
// const bills = [125, 555, 44];
//
// // Tips array
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
//
// // Totals array (bill + tip)
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
//
// console.log('Bills:', bills);
// console.log('Tips:', tips);
// console.log('Totals:', totals);
//
/*
const karlsArray = ['Karl', 'Jung', 2025 - 1994, 'programmer',];

const user = {
    firstName: 'Karl',
    middleName: undefined,
    lastName: null,
    age: null,
    job: 'Programmer'
};
console.log(user);
console.log(karlsArray);
console.log(user.age, karlsArray[2]);
console.log(user['lastName']);
let age = 31;
/*
function getAllNames() {
    user.lastName ??= 'Jung';
    user.middleName ??= 'Humphrey';
    user.age ??= age;
    return {lastName: user.lastName, middleName: user.middleName, firstName: user.firstName};
}

console.log(getAllNames());
console.log(user);

const question = prompt('What do you want to know about KJ? Choose between first name, middle name, last name, age, or job');
function askMe() {
    if (question == 'first name') {
        alert(user.firstName);
    } else if (question == 'last name') {
        alert(user.lastName);
    } else if (question == 'middle name') {
        alert(user.middleName);
    } else if (question === 'age') {
        alert(user.age);
    } else if (question === 'job') {
        alert(user.job);
    }
}

askMe();
const friends = ['Michael', 'Amy', 'Sawyer'];

console.log(friends);
console.log(`${user.firstName} is my name, I have ${friends.length} friends and my best friend is ${friends[0]}`);


const karl = {
    firstName: 'Karl',
    lastName: 'Jung',
    birthYear: 1994,
    job: 'Programmer',
    friends: ['Michael', 'Peter', 'Steven'], // random nade up names
    hasDriversLicense: true,
    currentYear: 2025,

    // calcAge: function (birthYear) {
    //     return 2025 - birthYear;
    // }

    calcAge: function () {
        // console.log(this);
        this.age = this.currentYear - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job}. He has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
    }
};
console.log(`${karl.firstName} is`, karl.calcAge(),);
console.log('As he was born in', karl.birthYear);
console.log(`The current year is ${karl.currentYear}`);
karl.location = 'New York City';
console.log(karl);

const birthday = (birthYear) => 2025 - birthYear;
console.log(birthday(1994));

let testArr = ['KJ', 'Karl', 'Sawyer', 'Amy', ['Jung', 'Piedra', 'Noah']];
console.log(testArr);
const marriedStatus = `${testArr[3]} ${testArr[4][1]} is married to ${testArr[1]} ${testArr[4][0]}. ${testArr[3]} is ${birthday(1989)} in October, and ${karl.firstName} turned ${karl.currentYear - karl.birthYear} in March.`;
console.log(marriedStatus);

if (karl.age === 31 && karl.firstName === 'Karl' && karl.hasDriversLicense === true && karl.job === 'Programmer') {
    console.log(`Karl is a 31 year old Programmer. He has a driver's license.`);
}

console.log(karl.getSummary());

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        john.bmi = this.mass / (this.height * this.height);
        return this.mass / (this.height * this.height);
    }

};

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        mark.bmi = this.mass / (this.height * this.height);
        return this.mass / (this.height * this.height);
    },
};


console.log(`${mark.fullName}'s BMI ${mark.calcBMI()} is higher than ${john.fullName}'s ${john.calcBMI()}`);


console.log(mark);
console.log(john);


for (let rep = 0; rep < 10; rep++) {
    console.log(`Rep number: ${rep}`);
}


const karlArray = [
    'Karl',
    'Jung',
    2025 - 1994,
    'programmer',
    ['Michael', 'Peter', 'Steven'],
    false,
    true,
];

const types = [];

for (let i = 0; i < karlArray.length; i++) {
    console.log(typeof karlArray[i], karlArray[i]);
    // types[i] = typeof karlArray[i]
    types.push(typeof karlArray[i]);
}
console.log('\n');
console.log(types);

const years = [1989, 1990, 1994, 2021];
let ages = [];
let currentYear = 2025;
for (let i = 0; i < years.length; i++) {
    ages.push(currentYear - years[i]);
}
console.log(ages);

console.log(`Karl is ${ages[2]} and Amy is ${ages[0]}`);


 
// continue and break
console.log('\n');
console.log('<--ONLY STRINGS-->');
for (let i = 0; i < karlArray.length; i++) {
    if (typeof karlArray[i] !== 'string') continue;

    console.log(karlArray[i], typeof karlArray[i]);
}
console.log('<--ONLY NUMBERS-->');
for (let i = 0; i < karlArray.length; i++) {
    if (typeof karlArray[i] !== 'number') break;

    console.log(karlArray[i], typeof karlArray[i]);
}

const karlArray = [
    'Karl',
    'Jung',
    2025 - 1994,
    'programmer',
    ['Michael', 'Peter', 'Steven'],
    true
];

for (let i = karlArray.length - 1; i >= 0; i--) {
    console.log(i, karlArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-Starting exercise ${exercise}-`);


    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting repetition ${rep}`);
    }
}


// while loop
// for (let rep = 1; rep < 10; rep++) {
//     console.log(`Lifting repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//     console.log(`lifting weights repetition ${rep}`);
//     rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`you rolled ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`you finally rolled ${dice}`);
}
*/

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
tips = [];
totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
}
console.log(bills, tips, totals);

console.log('Hello');