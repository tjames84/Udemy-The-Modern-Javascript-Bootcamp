let notes = [

];

const filters = {
  searchText: "",
};

// check for existing saved data
const notesJSON = localStorage.getItem('notes');

if (notesJSON !== null) {
  notes = JSON.parse(notesJSON);
}

// CRUD - create, read, update, delete

// creating and updating
//localStorage.setItem('location', 'Colorado');

// reading
// console.log(localStorage.getItem("location"));

// deleting
// localStorage.removeItem("location");
// localStorage.clear(); // removes everything in localstroage

// const user = {
//   name: 'Tony',
//   age: 35
// };

// JSON stringify and parse

// const userJSON = JSON.stringify(user);
// console.log(userJSON);
// localStorage.setItem('user', userJSON);

// const userJSON = localStorage.getItem('user');
// const user = JSON.parse(userJSON);
// console.log(`${user.name} is ${user.age}`);

const renderNotes = (notes, filters) => {
  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector("#notes").innerHTML = "";

  filteredNotes.forEach((note) => {
    const noteEl = document.createElement("p");

    if (notes.title > 0) {
      noteEl.textContent = note.title;
    } else {
      noteEl.textContent = "Unnamed note";
    }
    document.querySelector("#notes").appendChild(noteEl);
  });
};

renderNotes(notes, filters);

document.querySelector("#create-note").addEventListener("click", function (e) {
  notes.push({
    title: "",
    body: "",
  });
  localStorage.setItem("notes", JSON.stringify(notes));
  renderNotes(notes, filters);
});

document.querySelector("#search-text").addEventListener("input", (e) => {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector("#filter-by").addEventListener("change", (e) => {
  console.log(e.target.value);
});