'use strict';

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

console.log(Object.entries(game.scored));

for (const [goalNum, player] of Object.entries(game.scored)) {
  console.log(`Goal ${1 + Number(goalNum)}: ${player}`);
} // end for

//2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
console.log(Object.values(game.odds));

let average1 = 0;
for (const odds of Object.values(game.odds)) {
  average1 += odds;
} // end for

average1 /= Object.values(game.odds).length;
console.log(average1);

// or

let average2 = 0;
const odds = Object.values(game.odds);
const length = odds.length;

for (const odd of odds) {
  average2 += odd;
} // end for
average2 /= length;
console.log(average2);

//3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//Odd of victory Bayern Munich: 1.33
//Odd of draw: 3.25
//Odd of victory Borrussia Dortmund: 6.5
//Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

const teamOdds = Object.entries(game.odds);

console.log(teamOdds);

// use Optional Chaining

for (const [key, odd] of teamOdds) {
  const text = key != 'x' ? 'victory' : 'draw:';
  const teamName = ` ${game?.[key] ?? ''}`;
  console.log(`Odd of ${text}${teamName} ${odd}`);
} // end for
//BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//      {
//        Gnarby: 1,
//       Hummels: 1,
//        Lewandowski: 2
//      }

const scorers = {};

for (const player of game.scored) {
  // if player field exist then increment by 1 otherwise make the property and set its value to 1
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
} // end for

console.log(scorers);
