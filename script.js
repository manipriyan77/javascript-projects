"use strict";

const checkBtn = document.querySelector(".check");
const inputField = document.querySelector(".guess");
const score = document.querySelector(".score");
const againBtn = document.querySelector(".again");
const highScoreElement = document.querySelector(".highscore");
let secretNum = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
let currentScore = 20;

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

checkBtn.addEventListener("click", function () {
  const guessedValue = Number(inputField.value);
  // when no input
  if (!guessedValue) {
    // document.querySelector(".message").textContent = "Please enter a valid number";
    displayMessage("PLease enter a valid number");
    document.querySelector(".message").style.color = "red";
  }
  // when player wins the game
  else if (guessedValue === secretNum) {
    document.querySelector(".message").textContent = "Correct Number";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = secretNum;
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".message").style.color = "white";

    if (currentScore > highScore) {
      highScore = currentScore;
      highScoreElement.textContent = highScore;
    }
  } else if (guessedValue !== secretNum) {
    document.querySelector(".message").style.color = "white";
    if (currentScore > 1) {
      displayMessage(
        guessedValue > secretNum ? "Guessed value is bigger" : "Guessed value is smaller"
      );
      currentScore--;
      score.textContent = currentScore;
    } else {
      displayMessage("You've lost");
      score.textContent = 0;
    }
  }
  // guess value is high
  // else if (guessedValue > secretNum) {
  //   if (currentScore > 1) {
  //     document.querySelector(".message").textContent = "Guessed value is bigger";
  //     currentScore--;
  //     score.textContent = currentScore;
  //   } else {
  //     document.querySelector(".message").textContent = "You've lost";
  //     score.textContent = 0;
  //   }
  // }
  // guess value is low
  // else if (guessedValue < secretNum) {
  //   if (currentScore > 1) {
  //     document.querySelector(".message").textContent = "Guessed value is smaller";
  //     currentScore--;
  //     score.textContent = currentScore;
  //   } else {
  //     document.querySelector(".message").textContent = "You've lost";
  //     score.textContent = 0;
  //   }
  // }
});

againBtn.addEventListener("click", function () {
  currentScore = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  score.textContent = currentScore;
  document.querySelector(".number").textContent = "?";
  displayMessage("");
  inputField.value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
