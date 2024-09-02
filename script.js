// let promise = new Promise(function(resolve, reject) {
// 	let promise1 = new Promise(function(resolve, reject) {
//   let time = Math.random() * (3000 - 1000) + 1000;
//   setTimeout(function(){
//     resolve(time);
//   }, time);
// });
// });
// let promise1 = new Promise(function(resolve, reject) {
//   let time = Math.random() * (3000 - 1000) + 1000;
//   setTimeout(function(){
//     resolve(time);
//   }, time);
// });

// let promise2 = new Promise(function(resolve, reject) {
//   let time = Math.random() * (3000 - 1000) + 1000;
//   setTimeout(function(){
//     resolve(time);
//   }, time);
// });

// let promise3 = new Promise(function(resolve, reject) {
//   let time = Math.random() * (3000 - 1000) + 1000;
//   setTimeout(function(){
//     resolve(time);
//   }, time);
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   let output = document.getElementById('output');
//   for (let i = 0; i < values.length; i++) {
//     let row = document.createElement('tr');
//     let nameCell = document.createElement('td');
//     nameCell.textContent = `Promise ${i + 1}`;
//     row.appendChild(nameCell);
//     let resultCell = document.createElement('td');
//     resultCell.textContent = values[i];
//     row.appendChild(resultCell);
//     output.appendChild(row);
//   }
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

let output = document.getElementById('output');
// let loadingRow = document.createElement('tr');
// let loadingCell = document.createElement('td');
// loadingCell.textContent = 'Loading...';
// loadingCell.colSpan = 2;
// loadingRow.appendChild(loadingCell);
// output.appendChild(loadingRow);

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   output.removeChild(loadingRow);

//   let totalTime = 0;
//   for (let i = 0; i < values.length; i++) {
//     let row = document.createElement('tr');
//     let nameCell = document.createElement('td');
//     nameCell.textContent = `Promise ${i + 1}`;
//     row.appendChild(nameCell);
//     let resultCell = document.createElement('td');
//     resultCell.textContent = values[i];
//     row.appendChild(resultCell);
//     output.appendChild(row);
//     totalTime += values[i];
//   }
//   let totalRow = document.createElement('tr');
//   let totalNameCell = document.createElement('td');
//   totalNameCell.textContent = 'Total';
//   totalRow.appendChild(totalNameCell);
//   let totalTimeCell = document.createElement('td');
//   totalTimeCell.textContent = totalTime;
//   totalRow.appendChild(totalTimeCell);
//   output.appendChild(totalRow);
// });
let loadingRow = document.createElement('tr');
loadingRow.id = 'loading'; // assign the id to the loading row
let loadingCell = document.createElement('td');
loadingCell.textContent = 'Loading...';
loadingCell.colSpan = 2; // to make it span 2 columns
loadingRow.appendChild(loadingCell);
output.appendChild(loadingRow);

Promise.all([promise1, promise2, promise3]).then((values) => {
  // remove the "Loading..." row
  output.removeChild(loadingRow);

  let totalTime = 0;
  for (let i = 0; i < values.length; i++) {
    let row = document.createElement('tr');
    let nameCell = document.createElement('td');
    nameCell.textContent = `Promise ${i + 1}`;
    row.appendChild(nameCell);
    let resultCell = document.createElement('td');
    resultCell.textContent = (values[i] / 1000).toFixed(2); // convert time to seconds and keep 2 decimal places
    row.appendChild(resultCell);
    output.appendChild(row);
    totalTime += values[i];
  }

  // append the total time row
  let totalRow = document.createElement('tr');
  let totalNameCell = document.createElement('td');
  totalNameCell.textContent = 'Total';
  totalRow.appendChild(totalNameCell);
  let totalTimeCell = document.createElement('td');
  totalTimeCell.textContent = (totalTime / 1000).toFixed(2); // convert total time to seconds and keep 2 decimal places
  totalRow.appendChild(totalTimeCell);
  output.appendChild(totalRow);
});