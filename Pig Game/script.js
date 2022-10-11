'use strict';

/** Game Player Objects  */
const playerZero = {
  playerElement: document.querySelector('.player--0'),
  totalScoreElement: document.getElementById('score--0'),
  totalScore: 0,
  currentScoreElement: document.getElementById('current--0'),
  currentScore: 0,
}; // playerZero object

const playerOne = {
  playerElement: document.querySelector('.player--1'),
  totalScoreElement: document.getElementById('score--1'),
  totalScore: 0,
  currentScoreElement: document.getElementById('current--1'),
  currentScore: 0,
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

const rollDiceButton = document.querySelector('.btn--roll');
const newGameButton = document.querySelector('.btn--new');
const holdButton = document.querySelector('.btn--hold');
/** Initial Game Loading Up */
let currentPlayer = playerZero;
resetGame();

/** Game Fuctions  */
newGameButton.addEventListener('click', function () {
  resetGame();
});

function resetGame() {
  resetScoreAll(playerZero);
  resetScoreAll(playerOne);

  dice.hideDice();
  currentPlayer.playerElement.classList.remove('player--winner');
  playerZero.playerElement.classList.add('player--active');
  playerOne.playerElement.classList.remove('player--active');
  currentPlayer = playerZero;
  rollDiceButton.disabled = false;
  holdButton.disabled = false;
} // end of resetGame

function resetScoreAll(player) {
  player.totalScore = 0;
  updateText(player.totalScoreElement, '0');
  resetCurrentScore(player);
} // end of resetScore

function resetCurrentScore(player) {
  player.currentScore = 0;
  updateText(player.currentScoreElement, '0');
}

function updateText(element, text) {
  element.textContent = text;
} // end updateText

/** Game Logic */

// game objects

function switchCurrentPlayer() {
  currentPlayer.playerElement.classList.remove('player--active');
  if (currentPlayer === playerZero) {
    currentPlayer = playerOne;
  } else {
    currentPlayer = playerZero;
  } // end if
  currentPlayer.playerElement.classList.add('player--active');
} // end switchCurrentPlayer

rollDiceButton.addEventListener('click', function () {
  dice.rollDice();
  dice.showDice();

  if (dice.diceNum === 1) {
    lostAllPoints();
    switchCurrentPlayer();
  } else {
    updateCurrentPlayerCurrentScore(dice.diceNum);
  } // end if
});

function lostAllPoints() {
  resetScoreAll(currentPlayer);
} // end of lostAllPoints

function updateCurrentPlayerCurrentScore(diceNum) {
  currentPlayer.currentScore += diceNum;
  updateText(currentPlayer.currentScoreElement, currentPlayer.currentScore);
} // end of updateCurrentPlayerCurrentScore

holdButton.addEventListener('click', function () {
  updateCurrentPlayerTotal();
});

function updateCurrentPlayerTotal() {
  currentPlayer.totalScore += currentPlayer.currentScore;
  resetCurrentScore(currentPlayer);
  updateText(currentPlayer.totalScoreElement, currentPlayer.totalScore);
  if (!checkForWinner(currentPlayer)) {
    switchCurrentPlayer();
  } else {
    rollDiceButton.disabled = true;
    holdButton.disabled = true;
  }
} // end of updateCurrentPlayerTotal

function checkForWinner(player) {
  if (currentPlayer.totalScore >= 10) {
    currentPlayer.playerElement.classList.add('player--winner');
    return true;
  } // end if
  return false;
} // end checkForWinner
