"use strict"
// localStorage.clear(); // removes everything in localstroage

let notes = getSavedNotes();

const filters = {
  searchText: "",
  sortBy: 'byEdited'

};

// check for existing saved data
// const notesJSON = localStorage.getItem("notes");

// if (notesJSON !== null) {
//   notes = JSON.parse(notesJSON);
// }

renderNotes(notes, filters);

document.querySelector("#create-note").addEventListener("click", function (e) {
  const id = uuidv4();
  const timeStamp = moment().valueOf();

  notes.push({
    id: id,
    title: "",
    body: "",
    createdAt: timeStamp,
    updatedAt: timeStamp
  });

  saveNotes(notes);
  location.assign(`/edit.html#${id}`);
});

document.querySelector("#search-text").addEventListener("input", (e) => {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector("#filter-by").addEventListener("change", (e) => {
  filters.sortBy = e.target.value;
  renderNotes(notes, filters);
});

window.addEventListener("storage", (e) => {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue);
    renderNotes(notes, filters);
  }
});

// Date()
// no args gives time now
// Date("month day year time")
// Unix Epoch - January 1st 1970 00:00:00

// const now = new Date();
// const timeStamp = now.getTime()

// const myDate = new Date(timeStamp)
// console.log(myDate.getFullYear())

// console.log(now.toString());
// console.log(`Year: ${now.getFullYear()}`);
// console.log(`Month: ${now.getMonth()}`);
// console.log(`Day of month: ${now.getDate()}`);
// console.log(`Hour: ${now.getHours()}`);
// console.log(`Minute: ${now.getMinutes()}`);
// console.log(`Second: ${now.getSeconds()}`);

// Moment.js
// https://momentjs.com/docs/
// const now = moment();
// console.log(now.toString());

// // now.minute()
// // console.log(now.minute());

// // add and subtract
// // .add(how many, 'years, months, days') and .subtract(how many, 'years, months days')
// now.subtract(1, 'week').subtract(20, 'days');

// // format('MMMM Do, YYYYY')
// console.log(now.format('MMMM Do, YYYY'));

// // time from now
// console.log(now.fromNow());

// // Unix in timestamp
// const nowTimeStamp = now.valueOf();

// console.log(moment(nowTimeStamp).toString())

// const birthday = moment();
// birthday.year('1984').month('09').day('27');

// console.log(birthday.format('MMM D, YYYY'))
