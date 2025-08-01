'use strict';

/*
let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive!');

const interface = 'Audio' 
const private = 1234;
*/


// Functions
// function logger() {
//     console.log('My name is KJ')
// }
//
// calling / running / invoking function
// logger();
// logger();
// logger();

/*
 calling function from other functions
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    return `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
}
console.log(fruitProcessor(2, 3));
*/
/*
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
 */
/*
function calcAge1(birthYear) {
    return 2025 - birthYear;
}

const age1 = calcAge1(1994);
console.log(age1)

const calcAge2 = function (birthYear) {
    return 2025 - birthYear
}

const age2 = calcAge2(1994);
console.log(age1, age2)


function calcAge1(birthYear) {
    return 2025 - birthYear;
}
*/
// Function expression

// Arrow function

// const calcAge3 = birthYear => 2025 - birthYear;
// const age3 = calcAge3(1994);
// console.log(age3)
//
// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2025 - birthYear;
//     const retirement = 65 - age;
//      return retirement;
//     return `${firstName} retires in ${retirement} years.`
// }
// console.log(yearsUntilRetirement(1994, 'KJ'));
// console.log(yearsUntilRetirement(1999, 'Jay'));

const calcAge = function (birthYear) {
    return 2025 - birthYear;
}
const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        return `${firstName} retires in ${retirement} years.`;
    } else {
        return `${firstName}, you may already retire!`;
    }
}
console.log(yearsUntilRetirement(1994, 'Karl'));
console.log(yearsUntilRetirement(1989, 'Amy'));
console.log(yearsUntilRetirement(1950, 'Andrew'));

/*  
 Function declaration: Can be used before its declared
 Function expression: Essentially a function value stored into a variable
 Arrow function: Great for quick one-line functions. Has no this keyword
*/


// Simple loop. Prints 10 to 0
for (let i = 10; i > 0; i--) {
    console.log(i);
}

/*
const firstNameLoop = 'KJ'; //'Karl'

for (let i = 0; i < firstNameLoop.length; i++) {
    console.log(firstNameLoop[i]);
}
*/

let numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'hello', 'world'];
console.log(numberList[10], numberList[11].toUpperCase());

// more arrow function practice

const calcAge4 = birthYear => 2037;
const age4 = calcAge4(1991);
console.log(age4);

