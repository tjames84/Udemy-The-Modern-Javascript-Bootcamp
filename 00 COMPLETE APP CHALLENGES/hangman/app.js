const puzzleEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");

let wordArray = ['Cat', 'Colorado', 'Dinosaur', 'Minnesota', 'snake', 'reptile', 'Astronomy', 'Mathmatics', 'Black Hole', 'Nebula', 'Galaxy'];
let randWord = wordArray[Math.floor(Math.random() * Math.floor(wordArray.length))]
let totalGuesses = Math.ceil(randWord.split('').length / 2);
console.log(randWord)


const game1 = new Hangman(randWord, totalGuesses);

puzzleEl.textContent = game1.getPuzzle();
guessesEl.textContent = game1.getStatusMessage();


window.addEventListener("keypress", function (e) {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  puzzleEl.textContent = game1.getPuzzle();
  guessesEl.textContent = game1.getStatusMessage();

});
