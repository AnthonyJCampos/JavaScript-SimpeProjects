'use strict';

/** ARRAY MAP METHODS */

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUSD = 1.1;

const movementsUSD = movements.map(mov => Math.trunc(mov * eurToUSD));

console.log(movements);
console.log(movementsUSD);

const stringArr = movements.map(function (mov, index) {
  return `Movement ${
    index + 1
  }: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`;
});

stringArr.forEach(str => console.log(str));
