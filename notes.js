console.log("Starting notes.js");
const fs = require("fs");
const _ = require("lodash");
//node app.js add --title='thisIsTitle' --body='thisIsBody'

var fetchNotes = () => {
  try {
    //read data from file
    var notesString = fs.readFileSync("notes-data.json");
    //parse to notes
    return JSON.parse(notesString);
  } catch (error) {
    return [];
  }
};

var saveNotes = notes => {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title: title,
    body: body
  };

  //check any duplicate
  var duplicateNotes = notes.filter(note => {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    //push to notes
    notes.push(note);
    saveNotes(notes);
    return note;
  }
  return null;
};

var getAllNotes = () => {
  console.log("Getting all notes");
};

var getNote = title => {
  console.log("Getting 1 note " + title);
};

var removeNote = title => {
  //fetch all notes
  var notes = fetchNotes();
  var newArray = [];
  //loop the notes array, if find title matches remove it and retutn number
  //if true read, remove, save and return true
  for (let index = 0; index < notes.length; index++) {
    if (notes[index].title !== title) {
      newArray.push(notes[index]);
    }
  }
  saveNotes(newArray);
  return notes.length - newArray.length;
  //else return false
};

module.exports = {
  addNote: addNote,
  getAllNotes: getAllNotes,
  getNote: getNote, 
  removeNote: removeNote
};
