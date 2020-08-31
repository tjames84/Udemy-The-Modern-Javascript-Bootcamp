const puzzleEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");

const wordArray = ['Cat', 'Colorado', 'Dinosaur', 'Minnesota', 'snake', 'reptile', 'Astronomy', 'Mathmatics', 'Black Hole', 'Nebula', 'Galaxy'];
const randWord = wordArray[Math.floor(Math.random() * Math.floor(wordArray.length))]
const totalGuesses = Math.ceil(randWord.split('').length / 2);
console.log(randWord)


const game1 = new Hangman(randWord, totalGuesses);

puzzleEl.textContent = game1.puzzle;
guessesEl.textContent = game1.statusMessage;

window.addEventListener("keypress", (e) => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  puzzleEl.textContent = game1.puzzle;
  guessesEl.textContent = game1.statusMessage;
});


getPuzzle((error, puzzle) => {
  if (error) {
    console.log(`Error: ${error}`);
  } else {
    console.log(puzzle);
  }
});

// const puzzle = getPuzzle();
// console.log(puzzle)
