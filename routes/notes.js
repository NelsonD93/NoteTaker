const notes = require('express').Router();
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');
// const dbActivities = require('../db/dbActivities')

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
    // Variable for the object we will save
    const newNote2 = {
      title,
      text,
      id: uuid(),
    };

    readAndAppend(newNote2, './db/db.json');

  // write a function that reads all of the entries in db.json and displays them in the html
  // run when app loads, so notes are getting pulled or applied
  // have to add or remove need to reread all (place the function in a .js file in the db folder, have already created dbActivities.js)
  

    res.json(newNote2);
  } else {
    res.json('Error in posting note');
  }
});

module.exports = notes;
