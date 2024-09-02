// let promise = new Promise(function(resolve, reject) {
// 	let promise1 = new Promise(function(resolve, reject) {
//   let time = Math.random() * (3000 - 1000) + 1000;
//   setTimeout(function(){
//     resolve(time);
//   }, time);
// });
// });
let promise1 = new Promise(function(resolve, reject) {
  let time = Math.random() * (3000 - 1000) + 1000;
  setTimeout(function(){
    resolve(time);
  }, time);
});

let promise2 = new Promise(function(resolve, reject) {
  let time = Math.random() * (3000 - 1000) + 1000;
  setTimeout(function(){
    resolve(time);
  }, time);
});

let promise3 = new Promise(function(resolve, reject) {
  let time = Math.random() * (3000 - 1000) + 1000;
  setTimeout(function(){
    resolve(time);
  }, time);
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  // values is an array of the resolved values of your promises
  // in the same order as the promises in your array

  // Get a reference to the table body
  let output = document.getElementById('output');

  // Remove the 'Loading...' row
  // ...

  // Add a row for each promise
  for (let i = 0; i < values.length; i++) {
    // Create a new row
    let row = document.createElement('tr');

    // Create a cell for the promise name
    let nameCell = document.createElement('td');
    nameCell.textContent = `Promise ${i + 1}`;
    row.appendChild(nameCell);

    // Create a cell for the promise result
    let resultCell = document.createElement('td');
    resultCell.textContent = values[i];
    row.appendChild(resultCell);

    // Add the row to the table
    output.appendChild(row);
  }
});