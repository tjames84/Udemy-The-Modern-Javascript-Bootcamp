const puzzleEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");

let game1;

window.addEventListener("keypress", (e) => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  render();
});

const render = () => {
  puzzleEl.textContent = game1.puzzle;
  guessesEl.textContent = game1.statusMessage;
};

const startGame = async () => {
  const puzzle = await getPuzzle("2");
  game1 = new Hangman(puzzle, 5);
  render();
};

document.querySelector("#reset").addEventListener("click", startGame);

startGame();

// getPuzzle("2")
//   .then((puzzle) => {
//     console.log(puzzle);
//   })
//   .catch((err) => {
//     console.log(`Error: ${err}`);
//   });

// OLD *************************************************************
// Asynchornous
// getPuzzle("2", (error, puzzle) => {
//   if (error) {
//     console.log(`Error: ${error}`);
//   } else {
//     console.log(puzzle);
//   }
// });

// const puzzle = getPuzzle();
// console.log(puzzle)

// fetch( url, {} )
// fetch("http://puzzle.mead.io/puzzle", {})
//   .then((response) => {
//     if (response.status === 200) {
//       return response.json();
//     } else {
//       throw new Error("Unable to fetch the puzzle");
//     }
//   })
//   .then((data) => {
//     console.log(data.puzzle);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
