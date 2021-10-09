const express = require('express');
const app = express();

const data = require('./data');

app.get('/api/notes', (req, res) => {
  const notesArr = [];
  for (const key in data.notes) {
    notesArr.push(data.notes[key]);
  }
  res.status(200).json(notesArr);
});

app.listen(3000, () => console.log('Creepin on port 3000!'));
