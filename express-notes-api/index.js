const express = require('express');
const app = express();

const data = require('./data');

app.use(express.json());

// READ
app.get('/api/notes', (req, res) => {
  const notesArr = [];
  for (const key in data.notes) {
    notesArr.push(data.notes[key]);
  }
  res.status(200).json(notesArr);
});

// READ - Single Note (Account for strings?)
app.get('/api/notes/:id', (req, res) => {
  if (typeof req.params.id < 1) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!data.notes[req.params.id]) {
    res.status(404).json({ error: `cannot find note with id ${req.params.id}` });
  } else {
    res.status(200).json(data.notes[req.params.id]);
  }
});

// POST (Add handling for 400 error, and 500 error)
app.post('/api/notes', (req, res) => {
  data.notes[data.nextId] = req.body;
  data.notes[data.nextId].id = data.nextId;
  res.status(200).json(req.body);
});

app.listen(3000, () => console.log('Creepin on port 3000!'));
