/*
let javaScriptIsFun = true;
console.log(javaScriptIsFun); // true
console.log(typeof javaScriptIsFun); // boolean
console.log(typeof "JavaScript"); // string
console.log(typeof 23); // number
console.log(typeof null); // object (this is a known JavaScript quirk)

const firstName = "Karl";
const lastName = "Jung";
console.log(firstName + " " + lastName);
// console.log(lastName + ' ' + lastName);
x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

let firstJob = "Programmer";
console.log(firstJob);
*/

/*
console.log(!ageAmy > ageKarl); // ageAmy is greater than ageKarl but using ! flips the boolean to the opposite
console.log(ageAmy > ageKarl); // true
console.log(ageKarl < ageAmy); // true ageKarl is less than ageAmy
console.log(ageAmy >= ageKarl); // true ageAmy is greater than or equal to ageKarl
console.log(ageAmy <= ageKarl); // false ageAmy is less than or equal to ageKarl
console.log(ageAmy == ageKarl); // false ageAmy is not equal to ageKarl
console.log(ageAmy === ageKarl); // false ageAmy is not equal to ageKarl
*/
/*
const now = 2025;
const ageKarl = now - 1994;
const ageAmy = now - 1989;
console.log(ageKarl * 2, ageKarl / 10, 2 ** 3);
const firstName = 'Karl';
const lastName = 'Jung';
console.log(firstName + ' ' + lastName);
console.log(now - 1994 > now - 1989);
let averageAge = (ageKarl + ageAmy) / 2;
const myself = [
    {age: 31, name: 'Karl'},
    {age: 35, name: 'Amy'},
    {age: 3, name: 'Sawyer'}
]

console.log(myself[0].age, myself[1].age, myself[2].age);
console.log(myself[0].name, myself[1].name, myself[2].name);
console.log(`My name is ${myself[0].name} and I am ${myself[0].age} years old`);

const scores = [10, 20, 30, 40, 50];
console.log(scores);
*/

// const legalAge = 17;
//
// if (legalAge >= 18) {
//     console.log('You are allowed to drive 🚘️');
// } else {
//     console.log('You are not allowed to drive 🔞');
// }
// const yearsLeft = 18 - legalAge;
// console.log(`You have ${yearsLeft} year left until you can drive`);
//
// let century;
// const birthYear = 2001;
//
// if(birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);
/*
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Marks's (${BMIMark})!`)
}
*/
/*
const inputYear = '1991';
console.log(String(23))
console.log(Number('205'))

// type coercion
console.log('I am ' + 23 + ' years old'); // number is converted to a string with the plus operator
console.log('23' - '10' - 3); // string is converted to a number with the minus operator
console.log('23' * '2'); // string is converted to a number with the times operator

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);
*/
/*
5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(''));
console.log(Boolean(NaN));

let money = 0;
if (money) {
    console.log("Don't spend it all!")
} else {
    console.log('You should get a job!')
}
*/
/*
const age = 18;
if (age === 18) console.log('You are 18!!!')

const favoriteNumber = Number(prompt('What is your fav number?'))
console.log(favoriteNumber)

if (favoriteNumber  === 23) {
    console.log('Cool, 23 is an amazing number!')
} else if (favoriteNumber === 10) {
    console.log('10 is a gnarly number!')
} else if (favoriteNumber === favoriteNumber) {
    console.log(`${favoriteNumber} is a solid choice!`)
}
*/
/*
const hasDriversLicense = true;
const hasGoodVision = true;
const isTired = false;
if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("You may drive at night!");
} else {
    console.log("You may not drive at night!");
}
*/
/*
const day = "Friday";

switch (day) {
    case 'Monday':
        console.log("Plan course structure");
        console.log('Go to coding meetup');
        break;
    case 'Tuesday':
        console.log('Prepare videos')
        break;
    case 'Wednesday':
    case 'Thursday':
        console.log('Write code examples');
        break;
    case 'Friday':
        console.log('Record videos')
    case 'Saturday':
    case 'Sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day!')
}

if (day === 'Saturday') {
    console.log('yea boy da weekend')
} else if (day === 'Monday') {
    console.log('its monday')
} else if (day === 'Tuesday') {
    console.log('its tuesday')
} else if (day === 'Wednesday') {
    console.log('its wednesday')
} else if (day === 'Thursday') {
    console.log('its thursday')
} else if (day === 'Friday') {
    console.log('its friday')
} else if (day === 'Sunday') {
    console.log('its sunday')
}
*/
/*
let firstName

if (23 > 25) {
    firstName = 'KJ'
} else {
    firstName = 'Karl'
}

console.log(firstName);
*/

// const age = 17;
// age >= 18 ? console.log('I like liquor') : console.log('I like water')
// const drink = age >= 18 ? 'Liquor' : 'Water'
// console.log(drink)
//
// const year = 2001
// const message = year >= 2000 ? 'You\'re a young buck' : 'You\'re an oldie';
// console.log(message)
//
// let drink2;
// if (age >= 18) {
//     drink2 = 'Liquor'
// } else {
//     drink2 = 'Water'
// }
// console.log(drink2)
// console.log(`I like to drink ${age >= 18 ? 'Liquor' : 'Water'}`)

const bill = 275;

// if (bill <= 300) {
//     tip = bill * 15 / 100;
//     console.log(tip)
// } else {
//     tip = bill * 20 / 100;
// }

let tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`bill: ${bill}, tip: ${tip}, total: ${bill + tip}`);
