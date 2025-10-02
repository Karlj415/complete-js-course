// Remember, we're going to use strict mode in all scripts now!
'use strict';
// Using Google, StackOverflow and MDN
// Find out what these do:
// 1. Array.from
// 2. Array.prototype.slice
// 3. Array.prototype.splice
// 4. Object.entries
// 5. Object.values
// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
/*
Understanding the problem
- What is temp amplitude? Answer: difference between highest and lowest temperatures
- How to compute max and min temperatures?
- What's a sensor error and what to do?

Breaking up into smaller problems
- How to ignore errors?
- Find max value in temp array
- Find min value in temp array
- Subtract min from max (amplitude) and return it
const calcTempAmplitude = function (temps) {
    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== 'number') continue;
        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

/*
 PROBLEM 2:
Function should now receive two arrays of temps

Understanding the problem
With two arrays should we implement functionality twice? NO! Just merge two arrays


const calcTempAmplitudeNew = function (t1, t2) {
    const temps = t1.concat(t2);
    console.log(temps);
    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== 'number') continue;
        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }

    console.log(max, min);
    return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);


const measureKelvin = function () {
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        value: 10
    };

    console.log(measurement);
    const kelvin = measurement.value + 273;
    return kelvin;
};
console.log(measureKelvin());


const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
console.log(`${data1[0]}°C ... ${data1[1]}°C ... ${data1[2]}°C ...`);
const printForecast = function (arr) {
    let str = ``;
    for (let i = 0; i < arr.length; i++) {
        str = str + `${arr[i]}°C in ${i + 1} days ... `;
    }
    console.log('...' + str);
};
printForecast(data1);
 */

const analyzeWorkWeek = function (dailyHours) {
    // Calculate total hours worked
    const totalHours = dailyHours.reduce((sum, hours) => sum + hours, 0);

    // Calculate average daily hours (rounded to 1 decimal place)
    const averageDailyHours = Math.round((totalHours / dailyHours.length) * 10) / 10;

    // Find the day with the most hours worked
    let maxHours = dailyHours[0];
    let maxDay = 0;
    for (let i = 1; i < dailyHours.length; i++) {
        if (dailyHours[i] > maxHours) {
            maxHours = dailyHours[i];
            maxDay = i;
        }
    }

    // Convert day index to day name
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const busiestDay = daysOfWeek[maxDay];

    // Count number of days worked (days with more than 0 hours)
    const daysWorked = dailyHours.filter(hours => hours > 0).length;

    // Check if full time (35 hours or more)
    const isFullTime = totalHours >= 35;

    return {
        totalHours,
        averageDailyHours,
        busiestDay,
        daysWorked,
        isFullTime
    };
};

// Example usage:
const weeklyHours = [7.5, 8, 6.5, 0, 8.5, 5, 0];
console.log(analyzeWorkWeek(weeklyHours));
