let todos = getSavedTodos();

const filters = {
  searchText: "",
  hideCompleted: false,
};

renderTodos(todos, filters);

// Listen for new todo creation
// document.querySelector('#add-todo').addEventListener('click', function (e) {
//     console.log('Add a new todo...')
// })

// document
//   .querySelector("#add-todo")
//   .addEventListener("click", (e) => console.log("Add a new todo..."));

// document
//   .querySelector("#new-todo-text")
//   .addEventListener("input", (e) => console.log(e.target.value));

document.querySelector("#search-text").addEventListener("input", (e) => {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

document.querySelector("#new-todo").addEventListener("submit", (e) => {
  e.preventDefault();
  todos.push({
    id: uuidv4(),
    text: e.target.elements.text.value,
    completed: false,
  });

  saveTodos(todos);
  renderTodos(todos, filters);
  e.target.elements.text.value = "";
});

document.querySelector("#hide-completed").addEventListener("change", (e) => {
  filters.hideCompleted = e.target.checked;
  renderTodos(todos, filters);
});
