//your JS code here. If required.
let promise = new Promise(function(resolve, reject) {
	let promise1 = new Promise(function(resolve, reject) {
  let time = Math.random() * (3000 - 1000) + 1000; // This will give a random time between 1 and 3 seconds
  setTimeout(function(){
    resolve(time);
  }, time);
});
});