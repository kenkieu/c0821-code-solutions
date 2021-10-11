const express = require('express');
const app = express();
const data = require('./data');
const fs = require('fs');

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const notesArr = [];
  for (const key in data.notes) {
    notesArr.push(data.notes[key]);
  }
  res.status(200).json(notesArr);
});

app.get('/api/notes/:id', (req, res) => {
  const numId = parseInt(req.params.id);
  if (isNaN(numId) || numId < 1) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!data.notes[numId]) {
    res.status(404).json({ error: `cannot find note with id ${numId}` });
  } else {
    res.status(200).json(data.notes[numId]);
  }
});

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (req.body.content) {
    data.notes[data.nextId] = req.body;
    data.notes[data.nextId].id = data.nextId;
    data.nextId++;
    const newData = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', newData, err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error has occurred' });
      } else {
        res.status(201).json(data.notes[data.nextId]);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const numId = parseInt(req.params.id);
  if (isNaN(numId) || numId < 1) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!data.notes[numId]) {
    res.status(404).json({ error: `cannot find note with id ${numId}` });
  } else if (numId) {
    delete data.notes[numId];
    const newData = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', newData, err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error has occurred' });
      } else {
        res.status(204).json();
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const numId = parseInt(req.params.id);
  if (isNaN(numId) || numId < 1) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (!data.notes[numId]) {
    res.status(404).json({ error: `cannot find note with id ${numId}` });
  } else if (numId) {
    data.notes[numId] = req.body;
    data.notes[numId].id = parseInt(numId);
    const newData = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', newData, err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error has occurred' });
      } else {
        res.status(200).json(data.notes[numId]);
      }
    });
  }
});

app.listen(3000, () => console.log('Listening on port 3000!'));
