const Hangman = function (word, remainingGuesses) {
    this.word = word,
    this.remainingGuesses = remainingGuesses
}

const Game1 = new Hangman('Cat', 2)
console.log(Game1)

const Game2 = new Hangman('Colorado', 4)
console.log(Game2)