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

var command = argv._[0];;
console.log("command", command); // all the arguments

if (command === "add") {
  console.log("Adding new notes");
  notes.addNote(argv.title, argv.body);
} else if (command === "list") {
  console.log("Listing all notes");
  notes.getAllNotes();
} else if (command === "remove") {
  console.log("remove all notes");
  notes.getNote(argv.title);
} else if (command === "read") {
  console.log("read all notes");
  notes.removeNote(argv.title);
} else {
  console.log("Command not recognized");
}
