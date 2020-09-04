// Set up index.html to load the bundle
// Make sure to load uuid via an npm module when necessary

// --

// Add necessary imports

// Render initial todos

// Set up search text handler

// Set up checkbox handler

// Set up form submission handler

// Bonus: Add a watcher for local storage

import { getTodos, createTodo, removeTodo, toggleTodo } from './todos'

console.log(getTodos())
removeTodo('9db4ce90-a8f6-4c69-a451-5dd6536d95af')
console.log(getTodos())