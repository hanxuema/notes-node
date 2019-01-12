console.log("Starting app");

const fs= require("fs");
const os = require('os');
const _= require("lodash"); //note checks core module, then the local node_modules
const notes= require('./notes.js');

var filter
var user =  os.userInfo();
// console.log(user);

//console.log(notes);

var res =  notes.addNote();
console.log(res);

console.log(notes.add(1,1));

// fs.appendFile('greeting.txt', `hello  ${user.username}  you are ${notes.age}`, function(err){

// });