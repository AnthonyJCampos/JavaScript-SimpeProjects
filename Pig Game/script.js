'use strict';

/** Game Player Objects  */
const playerZero = {
  totalScoreElement: document.getElementById('score--0'),
  totalScore: 0,
  currentScoreElement: document.getElementById('current--0'),
  currentScore: 0,
}; // playerZero object

const playerOne = {
  totalScoreElement: document.getElementById('score--1'),
  totalScore: 0,
  currentScoreElement: document.getElementById('current--1'),
  currentSCore: 0,
}; // playerOne Object

const dice = {
  diceElement: document.querySelector('.dice'),
  diceNum: 1,

  showDice: function () {
    this.diceElement.classList.remove('hidden');
  },
  hideDice: function () {
    this.diceElement.classList.add('hidden');
  }, // end hide dice
  rollDice: function () {
    this.diceNum = Math.trunc(Math.random() * 6 + 1);
    this.updateImage();
  },
  updateImage: function () {
    this.diceElement.src = `dice-${this.diceNum}.png`;
  },
}; // end of dice object

/** Initial Game Loading Up */
/** Game Fuctions  */

function resetGame() {
  resetScore(playerZero.totalScore, playerZero.totalScoreElement);
  resetScore(playerOne.totalScore, playerOne.totalScoreElement);

  resetScore(playerZero.currentScore, playerZero.currentScoreElement);
  resetScore(playerOne.currentScore, playerOne.currentScoreElement);
  dice.hideDice();
} // end of resetGame

function resetScore(score, element) {
  score = 0;
  updateText(element, score);
} // end of resetScore

function updateText(element, text) {
  element.textContent = text;
} // end updateText

/** Game Logic */

const newGameButton = document.querySelector('.btn--new');

const rollDiceButton = document.querySelector('.btn--roll');
// game objects

newGameButton.addEventListener('click', function () {
  resetGame();
});

rollDiceButton.addEventListener('click', function () {
  dice.rollDice();
  dice.showDice();
});
