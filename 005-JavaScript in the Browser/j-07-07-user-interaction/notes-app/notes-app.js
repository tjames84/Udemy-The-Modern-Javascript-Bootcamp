const notes = [{
    title: 'my next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

// document.querySelector('button').addEventListener('click', function (e) {
//     e.target.textContent = 'The button was clicked'
// }) 

document
  .querySelector("button")
  .addEventListener(
    "click",
    (e) => (e.target.textContent = "The button was clicked")
  );
