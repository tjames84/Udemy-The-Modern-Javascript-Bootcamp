'use strict'

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

// console.log(uuidv4())
const getSavedNotes = () => {
  const notesJSON = localStorage.getItem("notes");

  // if (notesJSON !== null) {
  //   return JSON.parse(notesJSON);
  // } else {
  //   return [];
  // }
  
  try {
    return notesJSON ? JSON.parse(notesJSON) : [];
  } catch (e) {
    return [];
  }

};

// save the notes to local storage
const saveNotes = (notes) => {
  localStorage.setItem("notes", JSON.stringify(notes));
};

// remove a note from the list
const removeNote = (id) => {
  const noteIndex = notes.findIndex((note) => {
    return note.id === id;
  });

  if (noteIndex > -1) {
    notes.splice(noteIndex, 1);
  }
};

// generate the DOM structure for a note
const generateNoteDOM = (note) => {
  const noteEl = document.createElement("div");
  const textEl = document.createElement("a");
  const button = document.createElement("button");

  // Setup the remove note button
  button.textContent = "x";
  noteEl.appendChild(button);
  button.addEventListener("click", () => {
    removeNote(note.id);
    saveNotes(notes);
    renderNotes(notes, filters);
  });

  // Setup the note title text
  if (note.title.length > 0) {
    textEl.textContent = note.title;
  } else {
    textEl.textContent = "Unnamed note";
  }
  textEl.setAttribute("href", `/edit.html#${note.id}`);
  noteEl.appendChild(textEl);

  return noteEl;
};

// sort your notes by one of three ways
const sortNotes = (notes, sortBy) => {
  if (sortBy === "byEdited") {
    return notes.sort((a, b) => {
      if (a.updatedAt > b.updatedAt) {
        return -1;
      } else if (a.updatedAt < b.updatedAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === "byCreated") {
    return notes.sort((a, b) => {
      if (a.createdAt > b.createdAt) {
        return -1;
      } else if (a.createdAt < b.createdAt) {
        return 1;
      } else {
        return 0;
      }
    })
  } else if (sortBy === "alphabetical") {
    return notes.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    })
  }else {
    return notes;
  }

};

// render application notes
const renderNotes = (notes, filters) => {
  notes = sortNotes(notes, filters.sortBy);
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

// Gererate the last edited message
const generateLastEditied = (timestamp) => {
  return `Last edited ${moment(note.updatedAt).fromNow()}`;
};
