'use strict';

// game objects

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

/** Initial Game Loading Up */
resetGame();

/** Game Fuctions  */

function resetGame() {
  resetScore(playerZero.totalScore, playerZero.totalScoreElement);
  resetScore(playerOne.totalScore, playerOne.totalScoreElement);
} // end of resetGame

function resetScore(score, element) {
  score = 0;
  updateText(element, score);
} // end of resetScore

function updateText(element, text) {
  element.textContent = text;
} // end updateText
