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

var command = argv._[0];
console.log("command", command); // all the arguments

if (command === "add") {
  console.log("Adding new notes");
  var note = notes.addNote(argv.title, argv.body);
  if (note === null) {
    console.log("note is duplicated");
  } else {
    console.log("new note has been added");
  }
} else if (command === "list") {
  console.log("Listing all notes");
  notes.getAllNotes();
} else if (command === "remove") {
  console.log("remove all notes");
  var res = notes.removeNote(argv.title);
  if (res === 0) {
    console.log(`remove 0`);
  } else {
    console.log(`remove ${res} notes`);
  }
} else if (command === "read") {
  console.log("read all notes");
  notes.getNote(argv.title);
} else {
  console.log("Command not recognized");
}
