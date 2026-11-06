console.log("hello world")
const resetButton = document.querySelector('#reset');
// const square = document.querySelector('.square');
const squares = document.querySelectorAll('.Square');
const currentPlayer = document.querySelector('#current-player');

let counter = 0;

function count () {
    counter = counter + 1;
    console.log('count:' + counter);
}
// Arrays
// How do we create an array?
// Create a const called winningLines: an array that holds all 8 ways to win.
// Each way to win is its own array of 3 square numbers. The board is numbered:
//   0 | 1 | 2
//   3 | 4 | 5
//   6 | 7 | 8
// The top row is [0, 1, 2]. Find the other 7 (3 rows, 3 columns, 2 diagonals).
const winningLines = [
  [0, 1, 2],
  [2, 4, 6],
  [0, 4, 8],
  [1, 4, 7],
  [6, 7, 8],
  [3, 4, 5],
  [0, 3, 6],
  [2, 5, 8],
]
// How can we simplify the code by only using the current player?
  // Check the current player
  // if the current player is X
    // switch the current player text content to O
  // else the current player is O
    // Change the current player to X
function switchPlayer() {
  if (currentPlayer.textContent === 'X') {
    currentPlayer.textContent = 'O';
  } else {
    currentPlayer.textContent = 'X';
  }
}

// How can we use the currentPlayer and switchPlayer function to simplify our code?
function playTurn(event) {
  // Get the div that was clicked with the event target
  const square = event.target;
  console.log('Event Square:', square);

  // If the square text content is empty the play the current player
    // SET THE CLICKED SQUARE's TEXT CONTENT TO CURRENT PLAYER
  if (square.textContent === "") {
    square.textContent = currentPlayer.textContent;
    checkWinner();
    switchPlayer();
  }
}

function checkWinner() {
  for (const line of winningLines) {
    const first = squares[line[0]].textContent;
    const second = squares[line[1]].textContent;
    const third = squares[line[2]].textContent;
    if (first !== '' && first === second && first === third) {
      console.log(first + 'wins!');
      alert(first + "wins!");
    }
  }
}



// Create a function called checkWinner
  // FOR EACH line of winningLines
    // first  = the textContent of the square at line[0]   (hint: squares[line[0]])
    // second = the textContent of the square at line[1]
    // third  = the textContent of the square at line[2]
    // IF first is NOT empty AND first equals second AND first equals third
      // log first + ' wins!' to the console

// Event Listeners
// for (const square of squares) 
//   square.addEventListener('click', playTurn)

// function resetGame(){
//   square
// }
for (const square of squares) {
square.addEventListener('click', playTurn)
}

function resetGame() {
for (const square of squares) {
square.textContent = "";
}
} currentPlayer.textContent = "X";


resetButton.addEventListener("click", resetGame)

// function changeToX(){
//     square.textContent = 'X';
//     currentPlayer.textContent = 'O';
// }

// function changeToO(){
//     square.textContent = 'O';
//     currentPlayer.textContent = 'X';
// } 

//function  changeSqaureValue() {
   // let sqaureValue = sqaure.textContent;
   // if (sqaureValue == 'X') {
   //     changeToO();
  //  } else {
 //       changeToX();
//    }
//}
// function playturn(event){
//    const square = event.target;
//     square.textcontent = ""
    
//    console.log(Event Square: , square);
// }

// if (square.textContent === 'X') {
//     square.textContent = currentPlayer.textContent;
//   }

//   function 




// function changeSquare(event) {
// console.log('Click event;', event)
// const square = event.target;
// console.log('square',square);
// square.textcontent = 'X';
// }

// for(const square of squares) {
//     square.addeventListener('click', changeSquare);
// }