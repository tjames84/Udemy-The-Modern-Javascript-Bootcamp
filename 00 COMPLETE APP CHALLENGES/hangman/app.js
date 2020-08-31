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

// Making an HTTP request
// httpstatuses.com
// mdn http message
const request = new XMLHttpRequest();

request.addEventListener("readystatechange", (e) => {
  if (e.target.readyState === 4 && e.target.status === 200) {
    const data = JSON.parse(e.target.responseText);
    console.log(data);
  } else if (e.target.readyState === 4) {
    console.log("An error has taken place");
  }
});

request.open("GET", "http://puzzle.mead.io/puzzle");
request.send();