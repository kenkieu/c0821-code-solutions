const express = require('express');
const pg = require('pg');

const app = express();
app.use(express.json());

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res) => {
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
    from "grades"
  `;
  db.query(sql)
    .then(result => {
      const grades = result.rows;
      res.status(200).json(grades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades', (req, res) => {
  const newStudent = req.body;
  if (!(Number.isInteger(newStudent.score)) || newStudent.score < 0 || newStudent.score > 100) {
    res.status(400).json({
      error: '"score" must be a positive integer between 0 and 100'
    });
  } else if (!newStudent.name) {
    res.status(400).json({
      error: '"name" is a required field'
    });
  } else if (!newStudent.course) {
    res.status(400).json({
      error: '"course" is a required field'
    });
  } else if (!newStudent.score) {
    res.status(400).json({
      error: '"score" is a required field'
    });
  } else {
    const params = [newStudent.name, newStudent.course, newStudent.score];
    const sql = `
      insert into "grades" ("name", "course", "score")
        values($1, $2, $3)
        returning *;
    `;
    db.query(sql, params)
      .then(result => {
        const grade = result.rows[0];
        res.status(201).json(grade);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error occurred.'
        });
      });
  }
});

app.put('/api/grades/:gradeId', (req, res) => {
  const updateStudent = req.body;
  updateStudent.gradeId = parseInt(req.params.gradeId);
  if (!(Number.isInteger(updateStudent.score)) || updateStudent.score < 0 || updateStudent.score > 100) {
    res.status(400).json({
      error: '"score" must be a positive integer between 0 and 100'
    });
  } else if (!updateStudent.name) {
    res.status(400).json({
      error: '"name" is a required field'
    });
  } else if (!updateStudent.course) {
    res.status(400).json({
      error: '"course" is a required field'
    });
  } else if (!updateStudent.score) {
    res.status(400).json({
      error: '"score" is a required field'
    });
  } else {
    const params = [updateStudent.name, updateStudent.course, updateStudent.score, updateStudent.gradeId];
    const sql = `
      update "grades"
        set "name" = $1,
            "course" = $2,
            "score" = $3
        where "gradeId" = $4
        returning *;
    `;
    db.query(sql, params)
      .then(result => {
        const grade = result.rows[0];
        if (!grade) {
          res.status(404).json({
            error: `Cannot find grade with "gradeId" ${req.params.gradeId}`
          });
        } else {
          res.status(200).json(grade);
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error occurred.'
        });
      });
  }
});

app.delete('/api/grades/:gradeId', (req, res) => {
  let { gradeId } = req.params;
  gradeId = parseInt(gradeId);
  if (!Number.isInteger(gradeId) || gradeId < 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
  } else {
    const params = [gradeId];
    const sql = `
    delete from "grades"
    where "gradeId" = $1
    returning *;
    `;
    db.query(sql, params)
      .then(result => {
        const grade = result.rows[0];
        if (!grade) {
          res.status(404).json({
            error: `Cannot find grade with "gradeId" ${req.params.gradeId}`
          });
        } else {
          res.status(204).json();
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error occurred.'
        });
      });
  }
});

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});
