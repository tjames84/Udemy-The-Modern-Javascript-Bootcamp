const Hangman = function (word, remainingGuesses) {
  (this.word = word.toLowerCase().split("")),
    (this.remainingGuesses = remainingGuesses),
    (this.guessedLetters = ["c", "e"]);
};

Hangman.prototype.getPuzzle = function () {
  let puzzle = "";

  this.word.forEach((letter) => {
    if (this.guessedLetters.includes(letter) || letter === " ") {
      puzzle += letter;
    } else {
      puzzle += "*";
    }
  });

  return puzzle;
};

const Game1 = new Hangman("Cat", 2);
console.log(Game1.getPuzzle());

const Game2 = new Hangman("Colorado denver", 4);
console.log(Game2.getPuzzle());
