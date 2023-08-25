const gameBoard = document.querySelector("#gameboard");
const infoDisplay = document.querySelector("#info");
const startCells = ["", "", "", "", "", "", "", "", ""];
let count = 0;

let displayValue = "circle";
infoDisplay.textContent = "Circle goes first";

function createBoard() {
  startCells.forEach((_cell, index) => {
    const cellElement = document.createElement("div");
    cellElement.classList.add("square");
    cellElement.id = index;
    cellElement.addEventListener("click", addValue);
    gameBoard.append(cellElement);
  });
}

createBoard();

function addValue(e) {
  //   console.log("e", e.target);s
  const display = document.createElement("div");
  display.classList.add(displayValue);
  e.target.append(display);
  displayValue = displayValue === "circle" ? "cross" : "circle";
  infoDisplay.textContent = "It is noe" + displayValue + "'s turn";
  e.target.removeEventListener("click", addValue);
  checkScore();
}

function checkScore() {
  const squares = document.querySelectorAll(".square");
  //   console.log("squares", squares);
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  winningConditions.forEach((array) => {
    console.log("array", array);
    let circleWins = array.every((cell) => {
      //   console.log("cell", cell, squares[cell]);
      return squares[cell].firstChild?.classList.contains("circle");
      //   console.log("circleWins", return squares[cell].firstChild?.classList.contains("circle"));
    });
    if (circleWins) {
      infoDisplay.textContent = "Circle Wins!!!";
      squares.forEach((square) => {
        square.replaceWith(square.cloneNode(true));
      });
      return;
    }
  });
  winningConditions.forEach((array) => {
    // console.log("array", array);
    let crossWins = array.every((cell) => {
      //   console.log("cell", cell, return squares[cell]);
      return squares[cell].firstChild?.classList.contains("cross");
    });
    if (crossWins) {
      infoDisplay.textContent = "Cross Wins!!!";
      squares.forEach((square) => {
        square.replaceWith(square.cloneNode(true));
      });
      return;
    }
  });
}
