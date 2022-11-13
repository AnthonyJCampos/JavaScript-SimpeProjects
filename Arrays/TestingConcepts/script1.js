'use strict';

// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];

// Slice method, it does not change the OG array

// slice parm starting index , ending index not inclusive

console.log(arr.slice(2)); // ['c', 'd', 'e']
console.log(arr.slice(2, 4)); // // ['c', 'd']

console.log(arr.slice(-2)); // gives us the last two elements
console.log(arr.slice(-1)); // give us the last index element

// we can use a the slice method to create a shallow copy of the array
// example below
console.log(arr.slice());

// Splice, does change the OG array

console.log(arr.splice(2)); // removes all elements starting at index 2
console.log(arr);

arr.splice(-1); // this will remove the last element

console.log(arr); // ['a']

// at method

arr = ['a', 'b', 'c', 'd', 'e'];

// ways to get the last element in an array

console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

// forEach

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

movements.forEach(mov => {
  console.log(mov);
});

movements.forEach(function (mov, index, arr) {
  console.log(
    `Movement ${index + 1}: You ${
      mov > 0 ? 'deposited' : 'withdrew'
    } ${Math.abs(mov)}`
  );
});

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

let JuliaData1 = [3, 5, 2, 12, 7];
let KateData1 = [4, 1, 15, 8, 3];

let JuliaData2 = [9, 16, 6, 8, 3];
let KateData2 = [10, 5, 6, 1, 4];

let datasets = [JuliaData1, KateData1, JuliaData2, KateData2];

datasets.forEach(dataset => {
  checkDogs(dataset);
});

function checkDogs(dataset) {
  // first and last element are cats, remove them and create shallow copies
  const dataCorrected = correctData(dataset);
  // log to the console whether the dog is a adult or puppy
  displayData(dataCorrected);
} // end checkDogs

function correctData(dataset) {
  return dataset.slice(1, dataset.length - 1);
} // end correctData

function displayData(dataset) {
  // A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
  // ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
  dataset.forEach(function (age, index) {
    console.log(
      `Dog number ${index + 1} is an ${
        age >= 3 ? `adult, and is ${age} years old` : 'still a puppy 🐶'
      }`
    );
  });
} // end displayData
