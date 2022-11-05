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
