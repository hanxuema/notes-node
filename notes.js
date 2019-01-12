console.log("Starting notes.js");

// console.log(module);

//module.exports.age = 25;

// module.exports.addNote = () => {
//   console.log("addnotes");
//   return "new notes";
// };

// module.exports.add = (a, b) => {
//   return a + b + 3;
// };

//node app.js add --title='thisIsTitle' --body='thisIsBody'
var addNote = (title, body) => {
  console.log("Adding note ", title, body);
};

var getAllNotes = () =>{
  console.log("Getting all notes");
};

var getNote = (title) =>{
  console.log("Getting 1 note " + title);
};

var removeNote = (title) =>{
  console.log("Removing 1 note "+ title);
};

module.exports = {
  addNote: addNote,
  getAllNotes:getAllNotes,
  getNote: getNote,
  removeNote: removeNote
};
