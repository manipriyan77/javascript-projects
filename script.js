"use strict";

// selecting the elements
const score0Element = document.querySelector("#score--0");
const score1Element = document.getElementById("score--1");
const current0Element = document.getElementById("current--0");
const current1Element = document.getElementById("current--1");
const diceElement = document.querySelector(".dice");
const rollDiceBtnElement = document.querySelector(".btn--roll");
const newBtnElement = document.querySelector(".btn--new");
const holdBtnElement = document.querySelector(".btn--hold");
const player0Element = document.querySelector(".player--0");
const player1Element = document.querySelector(".player--1");

let scores, currentScore, activePlayer, isPlaying;

// Initial condtion

function initFunction() {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  isPlaying = true;

  current0Element.textContent = 0;
  current1Element.textContent = 0;
  player0Element.classList.remove("player-winner");
  player1Element.classList.remove("player-winner");
  player0Element.classList.add("player--active");
  player1Element.classList.remove("player--active");
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  diceElement.classList.add("hidden");
}

initFunction();

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Element.classList.toggle("player--active");
  player1Element.classList.toggle("player--active");
}

// rolling functionality
rollDiceBtnElement.addEventListener("click", function () {
  if (isPlaying) {
    const diceNumber = Math.trunc(Math.random() * 6) + 1;
    diceElement.classList.remove("hidden");
    diceElement.src = `assets/dice-${diceNumber}.png`;
    if (diceNumber !== 1) {
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

holdBtnElement.addEventListener("click", function () {
  if (isPlaying) {
    // scores[activePlayer] = scores[activePlayer] + currentScore;
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      isPlaying = false;
      diceElement.classList.add("hidden");
      document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
      document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
});

newBtnElement.addEventListener("click", initFunction);
