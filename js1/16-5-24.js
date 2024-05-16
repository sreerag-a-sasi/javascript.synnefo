console.log("first line");
console.log("second line");

//asynchronous operation
setTimeout(() => {
  console.log("third line");
}, 5000);

console.log("fourth line");
//outout will be
// first line
// second line
// fourth line
// third line
// because whenever javascript see's a asynchronous operation it will automatically stacked in a queue

// Asynchronous opretaions can be time out functions event listner functions and etc..
