// console.log("Hello world!");

// setTimeout(()=>{
//     console.log("I am in set timeout!");
// },1000); //will take 1 sec gap to print

// console.log(__dirname); //will print the directory
// console.log(__filename); //will print the filename


//Importing math.js module for use

//if we want to use the exported functions from math.js to this module we have to use require global object

require('./math.js'); // this will load the exported object module

const check = require('./math.js');  //check will store the objects it's getting from required function

console.log(check);

console.log(check.div(3,5)); // now this check.div(3,5) can use the div function which was exported from math.js
