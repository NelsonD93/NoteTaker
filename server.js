// https://www.geeksforgeeks.org/node-js-npm-uuid/ for uuid

const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog');
const api = require('./routes/notes.js');

const PORT = process.env.PORT || 5000;

const app = express();

// Import custom middleware, "cLog"
app.use(clog);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
);

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './public/notes.html'))
);

//*** HOW TO BUILD POST ROUTE, what do we want to happen with the data once we post it?*/ app.post('/notes', (req,res) =>

// app.post('api/notes', (req, res) =>
// res.sendFile(path.join(__dirname, './public/notes.html'))
// );
// // );

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
