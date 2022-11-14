'use strict';

/** ARRAY MAP METHOD */

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUSD = 1.1;

const movementsUSD = movements.map(mov => Math.trunc(mov * eurToUSD));

console.log(movements);
console.log(movementsUSD);

// The map() method creates a new array populated with the results of calling a
// provided function on every element in the calling array.
const stringArr = movements.map(function (mov, index) {
  return `Movement ${
    index + 1
  }: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`;
});

stringArr.forEach(str => console.log(str));

/** ARRAY FILTER METHOD */
// The filter() method creates a shallow copy of a portion of a given array,
// filtered down to just the elements from the given array that pass the test
// implemented by the provided function.

// this will create a new array of all postive values
const deposits = movements.filter(mov => mov > 0);

console.log(deposits);

const withdrawals = movements.filter(mov => mov < 0);

console.log(withdrawals);
