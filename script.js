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