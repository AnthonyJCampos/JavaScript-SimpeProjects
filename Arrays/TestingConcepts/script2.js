'use strict';

/** ARRAY MAP METHODS */

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUSD = 1.1;

const movementsUSD = movements.map(mov => Math.trunc(mov * eurToUSD));

console.log(movements);
console.log(movementsUSD);
