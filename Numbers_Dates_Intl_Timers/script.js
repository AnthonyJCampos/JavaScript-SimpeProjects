'use strict';

////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

console.log(23 === 23.0); // true

// Base 10 - 0 to 9 1/10 = 0.1 3/10 = 3.33-
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false

// Conversion
console.log(Number('23'));
console.log(+'23');

// Parsing

// Integers
console.log(Number.parseInt('30px')); // 30
console.log(Number.parseInt('e23')); // NaN

// Floats

// good option for reading data from CSS
console.log(Number.parseFloat('2.5rem')); // 2.5
console.log(Number.parseFloat('2rem')); // 2

/////////////////////////////////////////////

console.log(Number.isNaN(20)); // false
console.log(Number.isNaN('20')); // false
console.log(Number.isNaN(+'20X')); // true

// is a better way to test for a number
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite('20')); // false

/** Math and Rounding Numbers */

// square roots
console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2)); // 5

// cubic root example
console.log(25 ** (1 / 3)); // 2.924017738212866

// random

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min) + 1) + min;
  // 0...1 -> 0...(max - min) -> min...max
} // end randomInt

console.log(getRandomIntInclusive(10, 20));

/** Numeric Separators */

// makes code more readable; however should only be done in code
const diameter = 287_460_000_000;

console.log(diameter); // 287460000000

/** DATES */

// create a date
const now = new Date();
console.log(now); //

console.log(new Date(account1.movementsDates.at(0)));

// working with dates

const future = new Date(2037, 10, 19, 15, 23);

console.log(future);

console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

// get current time stamp
console.log(Date.now());

/** Operations with Dates */

console.log(Number(future));

const calcDaysPassed = (date1, date2) =>
  Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));

const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));
console.log(days1);

//

// Experimenting with internalization API
const today1 = new Date();

const options1 = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long', // November
  year: '2-digit', // 22
  weekday: 'long', // Monday
};

// You can defined the local fomatting manually using something like
// locale: 'en-US'
// or use the browser such as:
const dateFormatedManual = new Intl.DateTimeFormat('pt-PT', options1).format(
  today1
);

const locale = navigator.language;
console.log(locale);
const dateFormatedAuto = new Intl.DateTimeFormat(locale, options1).format(
  today1
);

console.log(`Formated Date: ${dateFormatedManual}`);

console.log(`Formated Date: ${dateFormatedAuto}`);

/** Internationalizing Numbers Intl */

const options2 = {
  style: 'unit',
  unit: 'mile-per-hour',
};

const num = 45374831.45;
console.log(
  'Current Browser',
  new Intl.NumberFormat(locale, options2).format(num)
);
console.log('Germany: ', new Intl.NumberFormat('de-DE', options2).format(num));
console.log('Syria: ', new Intl.NumberFormat('ar-SY', options2).format(num));
