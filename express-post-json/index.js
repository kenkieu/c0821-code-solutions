const express = require('express');
const app = express();

const nextId = 1;
const grades = {};
const gradesArr = [];

app.get('/api/grades', (req, res) => {
  for (const key in grades) {
    gradesArr.push(grades[key]);
  }
  res.json(gradesArr);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  req.json({
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  });
});

app.listen(3000, () => console.log('Listening on port 3000!'));
