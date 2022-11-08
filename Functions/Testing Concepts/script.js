'use strict';

/** Examples of Functions Accepting Callback Functions */

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
}; // end oneWord

const upperFirstWord = function (str) {
  // using the rest syntax
  const [first, ...other] = str.split(' ');
  // using the spread operator
  return [first.toUpperCase(), ...other].join(' ');
};

// Higher-Order Function
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed string ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
}; // end transformer

// we are only passing in the function value itself
transformer('JavaScript is the best!', upperFirstWord);

transformer('JavaScript is the best!', oneWord);

/** Functions Returning Functions  */

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

// greeterHello is now the greet function with hello set to the greeting varaible
const greeterHello = greet('Hello');

// now we are passing Anthony to the returned function name varaible
greeterHello('Anthony');

// this calls both in one line
greet('Sup')('Marissa');

/** the call and apply Methods */

const alaska = {
  airline: 'Alaska',
  iataCode: 'AL',
  booking: [],

  // Enhanced Object Literal Syntax
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );

    this.booking.push({ flight: `${this.iataCode}${flightNum}`, name });
  }, // end book
};

alaska.book(239, 'Marissa Campos');
alaska.book(167, 'John Smith');

console.log(alaska);

const delta = {
  airline: 'Delta',
  iataCode: 'DA',
  booking: [],
}; // end delta

/** CALL METHOD */
// use the call to use the method from alaska with the detla object

const book = alaska.book; // set the book variable to the book function

book.call(delta, 666, 'Brandon Fo');
console.log(delta);

/** APPLY METHOD */

// use apply to pass in a array; however, can use spreader operator now

const flightData = [583, 'Alice Cooper'];
book.apply(delta, flightData);

// using spread operator instead
const flightData2 = [953, 'Carl Carl'];
book.call(delta, ...flightData2);
console.log(delta);

/** BIND METHOD does not immediately call the function,
 * instead it returns a new function where 'this' keyword is bound
 * Thus its set to whatever value we pas into bind
 **/

// creates a method with the this set to delta
const bookDA = book.bind(delta);

bookDA(654, 'Anthony Franics');

console.log(delta);

// the below code binds the method to this (delta) and binds a value to the first parm of the book method
const bookDA23 = book.bind(delta, 23);

bookDA23('Aaron Guy');
bookDA23('Kirby Kirback');

// With Event Listeners
alaska.planes = 300;
alaska.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
}; // end buyPlane

const buyPlaneALEvent = alaska.buyPlane.bind(alaska);
document.querySelector('.buy').addEventListener('click', buyPlaneALEvent);

// partial application, means we preset parms

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// use null since there is no this key word in the method
const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(200));
console.log(addVAT(100));

// simple challenge by instructor, solved

function addTaxRate(rate) {
  return function (value) {
    return value + value * rate;
  };
}

const test = addTaxRate(0.25);

console.log(test(100));
