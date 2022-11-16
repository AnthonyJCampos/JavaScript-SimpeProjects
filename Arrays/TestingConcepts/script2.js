'use strict';

/** ARRAY MAP METHOD */

const movements1 = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUSD = 1.1;

const movementsUSD = movements1.map(mov => Math.trunc(mov * eurToUSD));

console.log(movements1);
console.log(movementsUSD);

// The map() method creates a new array populated with the results of calling a
// provided function on every element in the calling array.
const stringArr = movements1.map(function (mov, index) {
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
const deposits = movements1.filter(mov => mov > 0);

console.log(deposits);

const withdrawals = movements1.filter(mov => mov < 0);

console.log(withdrawals);

/** Reduce Method */
// The reduce() method executes a user-supplied "reducer" callback function on each
// element of the Array, in order, passing in the return value from the calculation
// on the preceding element. The final esult of running the reducer across all
// elements of the array is a single value.

// preVal also known as the accumulator stores the value
const balance = movements1.reduce(function (preVal, curVal, curIndex) {
  return preVal + curVal;
}, 0);
// the 0 is the init value, can be left out
console.log(`Balance: ${balance}`);

// use reduce to get max value in array
const arr1 = [200, 450, -400, 3000, -650, -130, 70, 1300, 3000];

const max = arr1.reduce(function (preVal, curVal) {
  return preVal > curVal ? preVal : curVal;
}, arr1[0]);

console.log(max);

/** FIND METHOD */
// The find() method returns the first element in the provided array that satisfies
// the provided testing function. If no values satisfy the testing function,
// undefined is returned.

const names = ['Chris', 'Mike', 'Anthony', 'Carl', 'Aaron'];

const myName = names.find(str => str === 'Anthony');

console.log(myName);
console.log(names.find(str => str === 'logan'));

/** SORT METHOD */
const arr2 = [200, 450, -400, 3000, -650, -130, 70, 1300, 3000];
arr1.sort((a, b) => {
  return a > b ? -1 : 1;
});

// can also be done with
// Descending
arr2.sort((a, b) => b - a);

console.log(arr2);

/** Some more array practice  */

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// 1.

// get all the movement values from the current accounts in accounts and flatten them into and array
// and then reduce into a sum after filting all the negative values out
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((preVal, curVal) => preVal + curVal, 0);

console.log(bankDepositSum);

// 2. determine how many deposites there have been in the bank atleast 1000

// with filter
const cnt1 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000).length;

console.log(`Get count of deposits >= 100 using filter: ${cnt1}`);

const cnt2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((cnt, curVal) => (curVal >= 1000 ? ++cnt : cnt), 0);

console.log(`Get count of deposits >= 100 using reduce: ${cnt2}`);

// 3.

const depositesAndWithdrawls = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, curVal) => {
      //curVal > 0 ? (sums.deposits += curVal) : (sums.withdrawals += curVal);
      sums[curVal > 0 ? 'deposits' : 'withdrawals'] += curVal;
      return sums;
    },

    { deposits: 0, withdrawals: 0 }
  );

console.log(depositesAndWithdrawls);

// since why have curly braces we must used the return
const test1 = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, curVal) => {
      curVal > 0 ? (sums[0] += curVal) : (sums[1] += curVal);
      return sums; // remember you need to return sums
    },
    [0, 0]
  );

console.log(test1);

// 4.
// this is a nice title -> This IS a Nice Title
const converTitleCase = function (title) {
  const expections = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  function capitilize(str) {
    return str.at(0).toUpperCase() + str.slice(1);
  } // end capitilize

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (expections.includes(word) ? word : capitilize(word)))
    .join(' ');
  return capitilize(titleCase);
};

console.log(converTitleCase('this is a nice title'));
console.log(converTitleCase('this is a LONG title but not too long'));
console.log(converTitleCase('and here is another title with an EXAMPLE'));
