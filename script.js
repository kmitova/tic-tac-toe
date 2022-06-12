let count = 1
const cells = Array.from(document.getElementsByClassName('cell'))
const board = document.querySelector('.board')
let result = document.getElementById('result')
let thereIsWinner = false
let thereIsATie = false
let chosenCell 
let player1Selections = []
let player2Selections = []
let winner
result.textContent = 'Player 1 turn!'

// hide board when game is over
// if game is over, restart button shows up, when pressed, it reloads the site and sets board display to visible

// while loop breaks live server
// while (thereIsWinner === false && thereIsATie === false) {
  cells.forEach((cell) => cell.addEventListener('click', (e) => {
    chosenCell = e.target.id
    // check if there is space function
    
    checkForSpace()
    // play function if there is space and no winner
    if (!thereIsATie) {
        play(chosenCell)
        checkWinner()
    }
    // checkwinner function
    if (thereIsWinner || thereIsATie) {
      // board.css.display = 'none'

      // display game over somewhere and play again button which will reload the page
      if (thereIsWinner) {
        if (count % 2 === 0) {
          result.textContent = "player 1 wins the game";
        } else {
          result.textContent = "player 2 wins the game";
        }
      }
      if (thereIsATie) {
        result.textContent = "it's a tie";
      }
    }
  }))
// }

function play(selection) {
  console.log('in play function')
  console.log(selection)
  let choice = document.getElementById(selection)
  if (thereIsATie) {
    console.log("it is a tie")
  } else if (thereIsWinner) {
    console.log('there is a winner')
  }
  else {
    if (count % 2!== 0 && choice.textContent === '') {
    result.textContent = 'Player 2 turn!'
    choice.textContent = 'X'
    player1Selections.push(selection)
  } else if (count % 2 === 0 && choice.textContent === '') {
    result.textContent = 'Player 1 turn!'
    choice.textContent = 'O'
    player2Selections.push(selection)
  }
  }
  count += 1
}

// function check if there is space
function checkForSpace() {
  filledCells = 0
  for (let cell of cells) {
    if (cell.textContent !== '') {
      filledCells += 1
    }
    if (filledCells === 9) {
      thereIsATie = true
    }
  }
}
// function check if there is a winner
function checkWinner() {
  console.log(player1Selections)
  console.log(player2Selections)
  // checking player 1:
  if (player1Selections.includes('1') && player1Selections.includes('2') && player1Selections.includes('3')) {
    thereIsWinner = true
    
  } 
  if (player1Selections.includes('4') && player1Selections.includes('5') && player1Selections.includes('6')) {
    thereIsWinner = true

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
// check if there is a tie: no empty space and no winner
