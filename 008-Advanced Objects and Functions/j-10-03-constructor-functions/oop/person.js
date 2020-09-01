/**
 * Constructor Functions
 *  new generates a new empty object via the this
 *  use upper case for first letter const Whatever = ...
 * 
 */

const Person = function (firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}

const me = new Person('Tony', 'James', 35)
console.log(me)

const person2 = new Person('Angela', 'Zavattaro', 36)
console.log(person2)