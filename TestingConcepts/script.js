'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  }, // end opening hours

  /** Methods  */
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  }, // end order

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  }, // end orderDelivery

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your declicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
}; // end restaurant

/** Object Destructoring ES6  */

restaurant.orderDelivery({
  time: '22:30',
  address: '3044 Working Street, 99',
  mainIndex: 2,
  starterIndex: 2,
});

// we use curcly braces to destruct objects

// should have the property names of the object
let { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// if we want the variables names to be different from the prop names

const { name: restaurantName, openHours: hours, categories: tags } = restaurant;

console.log(restaurant, hours, tags);

// using default values with destructoring
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating variables

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// we need parenthesis becuase JS expects a code block when its just curly braces
({ a, b } = obj);

console.log(a, b);

// Nested objects within an object

const {
  fri: { open, close },
} = openingHours; // please note this is an object we already grabbed in prev code
console.log(open, close);

/** Array Destructoring ES6 */

// away of unpacking values into variables

const arr1 = [1, 2, 3];

// destructoring;

// example of an array being destructed into variables
const [x, y, z] = arr1;

// testing through console output
console.log(x, y, z);

//grab the first two elements, note variable name has no impact
let [first, second] = restaurant.categories;
console.log(first, second);

// example of skipping elements
console.log('Skipping Elements with Array Destructoring');
let [index1, , index3] = restaurant.categories;
console.log(index1, index3);

// you can use array destructing to swap elements
console.log('Swapping with Array Destructoring');
let [main, secondary] = restaurant.categories;
console.log(main, secondary);
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Array Destructoring can be used to recieve an array from a method
let [starter, mainCourse] = restaurant.order(2, 2);
console.log(starter, mainCourse);

// nested example
const nested = [1, 2, [3, 4]];
let [i, j, [k, t]] = nested;

console.log(i, j, k, t);

/** Spread Operator:
 * can only be used where we'd write value seperated by commas
 * */

const arr2 = [7, 8, 9];

// arr3 becomes 1, 2, 7, 8, 9
const arr3 = [1, 2, ...arr2];
console.log(...arr3);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// lets Copy an Array

const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 array

const joinedArray = [...restaurant.mainMenu, ...restaurant.starterMenu];

console.log(...joinedArray);

// works on iterables: arrays, strings, maps, sets. NOT objects

// Strings Spread Operator

const str = 'Anthony';
const letters = [...str, ' ', 'C.'];
console.log(letters);

// using the Spread Operator with a method for a object

/*
const ingredients = [
  prompt(`Let's make pasta!, Ingredient 1?`),
  prompt(`Ingredient 2?`),
  prompt(`Ingredient 3?`),
];
console.log(ingredients);
restaurant.orderPasta(...ingredients);
*/

// Since ES2018 the spread operator works on objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Anthony' };

const restCopy = { ...restaurant };
restCopy.name = `Papa's`;

console.log(restaurant.name);
console.log(restCopy.name);

/** Rest Pattern and Parameters */

// REST, because on LEFT side of =
const [c, d, ...others] = [1, 2, 3, 4, 5, 6, 7];

console.log(a, b, others);

// Objects

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
