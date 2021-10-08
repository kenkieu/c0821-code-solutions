const express = require('express');
const app = express();
app.use(express.json());

let nextId = 1;
const grades = {};
const gradesArr = [];

app.get('/api/grades', (req, res) => {
  res.json(gradesArr);
});

app.post('/api/grades', (req, res) => {
  grades[nextId] = req.body;
  grades[nextId].id = nextId;
  gradesArr.push(grades[nextId]);
  res.status(201).json(grades);
  nextId++;
});

app.listen(3000, () => console.log('Listening on port 3000!'));
