"use strict";

// random between 1 - 20
let answerKey = generateAnswerKey();

let highscore = 0;
let currentscore = 20;
let gameOver = false;

function generateAnswerKey() {
  return Math.trunc(Math.random() * 20) + 1;
} // end of generateAnswerKey

document.querySelector(".btn-check").addEventListener("click", function () {
  const input = document.querySelector(".guess").value;

  if (!gameOver) {
    if (!input) {
      document.querySelector(".message").textContent = "⛔ No Entry";
      return;
    } // end if

    const guessNumber = Number(input);
    gameOver = determineResult(guessNumber);
  } // end if
});

function determineResult(guess) {
  if (guess === answerKey) {
    winContentsStyleUpdate();

    if (highscore < currentscore) {
      highscore = currentscore;

      document.querySelector(".highscore").textContent = highscore;
      return true;
    } // end if
  } // end if

  if (guess > answerKey) {
    document.querySelector(".message").textContent = "To High";
  } else if (guess < answerKey) {
    document.querySelector(".message").textContent = "To Low";
  } // end if

  if (currentscore > 0) {
    currentscore--;
    document.querySelector(".score").textContent = currentscore;
    return false;
  } else {
    document.querySelector(".message").textContent = "You Lost the Game!";
  } // end if
  return true;
} // determineResult

function winContentsStyleUpdate() {
  // select the element we want to change
  document.querySelector(".message").textContent = "🤘 Correct Number";
  document.querySelector(".number").textContent = answerKey;
  // change background to green on win
  document.querySelector("body").style.backgroundColor = "#60b347";
  document.querySelector(".number").style.width = "30rem";
} // end of winContentsStyleUpdate

document.querySelector(".btn-again").addEventListener("click", function () {
  resetGame();
});

function resetGame() {
  // reset game flag
  gameOver = false;
  // generate new secret number
  answerKey = generateAnswerKey();
  // reset game board
  document.querySelector(".score").textContent = currentscore = 20;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
} // end of resetGame
