/**
 * 
 * babel 'name of input file' -o 'name output file'
 * 
 * npm init
 * 
 * babel preset
 * npm install babel-preset-env@1.6.1
 * 
 * babel 'input file name' --out-file 'output file name' --presets env
 * 
 * 
 * if nodemodule is not there
 * npm install
 * 
 */

const name = 'Mike'
console.log(name)

class Hangman {
    myMethod() {
        return 'Testing'
    }
}
const hangman = new Hangman()
console.log(hangman.myMethod())