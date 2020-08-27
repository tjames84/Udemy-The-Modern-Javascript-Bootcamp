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

// check for existing saved data
// read existing notes from local storage
const getSavedNotes = () => {
  const notesJSON = localStorage.getItem("notes");

  if (notesJSON !== null) {
    return JSON.parse(notesJSON);
  } else {
    return [];
  }
};

// save the notes to local storage
const saveNotes = (notes) => {
  localStorage.setItem("notes", JSON.stringify(notes));
};

// generate the DOM structure for a note
const generateNoteDOM = (note) => {
  
  const noteEl = document.createElement("div");
  const textEl = document.createElement("span");
  const button = document.createElement("button");

  // Setup the remove note button
  button.textContent = "x";
  noteEl.appendChild(button);

  // Setup the note title text
  if (note.title.length > 0) {
    textEl.textContent = note.title;
  } else {
    textEl.textContent = "Unnamed note";
  }
  noteEl.appendChild(textEl);

  return noteEl;
};

// render application notes
const renderNotes = (notes, filters) => {
  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector("#notes").innerHTML = "";

  filteredNotes.forEach((note) => {
    // const noteEl = document.createElement("p");

    // if (notes.title > 0) {
    //   noteEl.textContent = note.title;
    // } else {
    //   noteEl.textContent = "Unnamed note";
    // }

    const noteEl = generateNoteDOM(note);

    document.querySelector("#notes").appendChild(noteEl);
  });
};
