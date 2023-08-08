"use strict";

// selecting the elements
const score0Element = document.querySelector("#score--0");
const score1Element = document.getElementById("score--1");
const current0Element = document.getElementById("current--0");
const current1Element = document.getElementById("current--1");
const diceElement = document.querySelector(".dice");
const rollDiceBtnElement = document.querySelector(".btn--roll");
const newBtnElement = document.querySelector(".btn--new");
const holeBtnElement = document.querySelector(".btn--hold");

// Initial condtion
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add("hidden");

let currentScore = 0;

// rolling functionality
rollDiceBtnElement.addEventListener("click", function () {
  const diceNumber = Math.trunc(Math.random() * 6) + 1;
  diceElement.classList.remove("hidden");
  diceElement.src = `assets/dice-${diceNumber}.png`;
  if (diceNumber !== 1) {
    currentScore += diceNumber;
    current0Element.textContent = currentScore;
  } else {
  }
});
