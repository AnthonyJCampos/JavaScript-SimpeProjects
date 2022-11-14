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

/** Reduce Method */
// The reduce() method executes a user-supplied "reducer" callback function on each
// element of the Array, in order, passing in the return value from the calculation
// on the preceding element. The final esult of running the reducer across all
// elements of the array is a single value.

// preVal also known as the accumulator stores the value
const balance = movements.reduce(function (preVal, curVal, curIndex) {
  return preVal + curVal;
}, 0);
// the 0 is the init value, can be left out
console.log(`Balance: ${balance}`);

/** FIND METHOD */
// The find() method returns the first element in the provided array that satisfies
// the provided testing function. If no values satisfy the testing function,
// undefined is returned.

const names = ['Chris', 'Mike', 'Anthony', 'Carl', 'Aaron'];

const myName = names.find(str => str === 'Anthony');

console.log(myName);
console.log(names.find(str => str === 'logan'));
