console.log("Starting app");

const fs = require("fs");
const os = require("os");
const _ = require("lodash"); //note checks core module, then the local node_modules
const yargs = require("yargs");
const notes = require("./notes.js");

//console.log(process.argv);

const argv = yargs.argv;
// console.log(process.argv);
// console.log(argv);

var command = process.argv[2];
console.log("command", command); // all the arguments

if (command === "add") {
  console.log("Adding new notes");
  notes.addNote(argv.title, argv.body);
} else if (command === "list") {
  console.log("Listing all notes");
} else if (command === "remove") {
  console.log("remove all notes");
} else if (command === "read") {
  console.log("read all notes");
} else {
  console.log("Command not recognized");
}
