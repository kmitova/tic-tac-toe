const cells = Array.from(document.getElementsByClassName("cell"));
const board = document.querySelector(".board");
const restartButton = document.getElementById("restart-btn");
let result = document.getElementById("result");
let thereIsWinner = false;
let thereIsATie = false;
let chosenCell;
let player1Selections = [];
let player2Selections = [];
let count = 1;

result.textContent = "Player 1 turn!";
restartButton.addEventListener("click", () => {
  location.reload();
});

cells.forEach((cell) =>
  cell.addEventListener("click", (e) => {
    chosenCell = e.target.id;
    if (!thereIsATie && !thereIsWinner) {
      play(chosenCell);
    }
    if (thereIsWinner || thereIsATie) {
      if (thereIsWinner) {
        if (count % 2 === 0) {
          result.textContent = "Player 1 wins the game";
        } else {
          result.textContent = "Player 2 wins the game";
        }
      }
      if (thereIsATie) {
        result.textContent = "It's a tie";
      }
      e.preventDefault();
    }
  })
);

function play(selection) {
  let choice = document.getElementById(selection);
  if (!thereIsWinner) {
    checkForSpace();
    if (count % 2 !== 0 && choice.textContent === "") {
      result.textContent = "Player 2 turn!";
      choice.textContent = "X";
      player1Selections.push(selection);
    } else if (count % 2 === 0 && choice.textContent === "") {
      result.textContent = "Player 1 turn!";
      choice.textContent = "O";
      player2Selections.push(selection);
    }
  }
  checkWinner();
  if (thereIsWinner) {
    thereIsATie = false;
  }
  count += 1;
}

function checkForSpace() {
  filledCells = 1;
  for (let cell of cells) {
    if (cell.textContent !== "") {
      filledCells += 1;
    }
    if (filledCells === 9 && thereIsWinner === false) {
      thereIsATie = true;
    }
  }
}

function checkWinner() {
  // check player 1
  if (
    player1Selections.includes("1") &&
    player1Selections.includes("2") &&
    player1Selections.includes("3")
  ) {
    thereIsWinner = true;
  }
  if (
    player1Selections.includes("4") &&
    player1Selections.includes("5") &&
    player1Selections.includes("6")
  ) {
    thereIsWinner = true;
  }
  if (
    player1Selections.includes("7") &&
    player1Selections.includes("8") &&
    player1Selections.includes("9")
  ) {
    thereIsWinner = true;
  }
  if (
    player1Selections.includes("1") &&
    player1Selections.includes("4") &&
    player1Selections.includes("7")
  ) {
    thereIsWinner = true;
  }
  if (
    player1Selections.includes("2") &&
    player1Selections.includes("5") &&
    player1Selections.includes("8")
  ) {
    thereIsWinner = true;
  }
  if (
    player1Selections.includes("3") &&
    player1Selections.includes("6") &&
    player1Selections.includes("9")
  ) {
    thereIsWinner = true;
  }
  if (
    player1Selections.includes("1") &&
    player1Selections.includes("5") &&
    player1Selections.includes("9")
  ) {
    thereIsWinner = true;
  }
  if (
    player1Selections.includes("3") &&
    player1Selections.includes("5") &&
    player1Selections.includes("7")
  ) {
    thereIsWinner = true;
  }
  // check player 2
  if (
    player2Selections.includes("1") &&
    player2Selections.includes("2") &&
    player2Selections.includes("3")
  ) {
    thereIsWinner = true;
  }
  if (
    player2Selections.includes("4") &&
    player2Selections.includes("5") &&
    player2Selections.includes("6")
  ) {
    thereIsWinner = true;
  }
  if (
    player2Selections.includes("7") &&
    player2Selections.includes("8") &&
    player2Selections.includes("9")
  ) {
    thereIsWinner = true;
  }
  if (
    player2Selections.includes("1") &&
    player2Selections.includes("4") &&
    player2Selections.includes("7")
  ) {
    thereIsWinner = true;
  }
  if (
    player2Selections.includes("2") &&
    player2Selections.includes("5") &&
    player2Selections.includes("8")
  ) {
    thereIsWinner = true;
  }
  if (
    player2Selections.includes("3") &&
    player2Selections.includes("6") &&
    player2Selections.includes("9")
  ) {
    thereIsWinner = true;
  }
  if (
    player2Selections.includes("1") &&
    player2Selections.includes("5") &&
    player2Selections.includes("9")
  ) {
    thereIsWinner = true;
  }
  if (
    player2Selections.includes("3") &&
    player2Selections.includes("5") &&
    player2Selections.includes("7")
  ) {
    thereIsWinner = true;
  }
}
