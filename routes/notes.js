const notes = require('express').Router();
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');


// GET Route for retrieving all the notes
notes.get('/notes', (req, res) =>
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

// POST Route for submitting notes
notes.post('/notes', (req, res) => {
  // Destructuring assignment for the items in req.body
  const { title, text } = req.body;

  // If all the required properties are present
  if (title && text) {
    // Variable for the new object that will be saved
    const newNote2 = {
      title,
      text,
      id: uuid(),
    };

    // adds new note to json file
    readAndAppend(newNote2, './db/db.json');

    // displays error if problem with the note
    res.json(newNote2);
  } else {
    res.json('Error in posting note');
  }
});

module.exports = notes;
