const express = require('express');
const app = express();

const data = require('./data');
const fs = require('fs');

console.log(data);

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

// POST
app.post('/api/notes', (req, res) => {
// no content in req body
  if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (req.body.content) {
    data.notes[data.nextId] = req.body;
    data.notes[data.nextId].id = data.nextId;
    const newData = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', newData, err => {
      if (err) throw err;
    });
    res.status(201).json(data.notes[data.nextId]);
    data.nextId++;
  }
  // Condition???
  else if (!data) {
    res.status(500).json({ error: 'An unexpected error has occurred' });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  console.log(req.params);
  if (req.params.id < 1) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!data.notes[req.params.id]) {
    res.status(404).json({ error: `cannot find note with id ${req.params.id}` });
  }
  // Condition???
  else if (!data) {
    res.status(500).json({ error: 'An unexpected error has occurred' });
  } else if (req.params.id) {
    delete data.notes[req.params.id];
    console.log(data);
    const newData = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', newData, err => {
      if (err) throw err;
    });
    res.status(204).json();
  }
});

app.put('/api/notes/:id', (req, res) => {
  if (req.params.id < 1) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!data.notes[req.params.id]) {
    res.status(404).json({ error: `cannot find note with id ${req.params.id}` });
  }
  // Condition???
  else if (!data) {
    res.status(500).json({ error: 'An unexpected error has occurred' });
  } else if (req.params.id) {
    // review
    data.notes[req.params.id] = req.body;
    data.notes[data.nextId].id = data.nextId;
    const newData = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', newData, err => {
      if (err) throw err;
    });
    // review
    res.status(200).json();
  }

});

app.listen(3000, () => console.log('Creepin on port 3000!'));
