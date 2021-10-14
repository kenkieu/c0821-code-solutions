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

app.post('api/grades', (req, res) => {
  // const sql = req.body.content;
  console.log(req.body.content);
  // db.query(sql)
  //   .then(result => {
  //     const grades = result.rows;
  //     res.status(200).json(grades);
  //   })
  //   .catch(err => {
  //     console.error(err);
  //     res.status(500).json({
  //       error: 'An unexpected error occurred.'
  //     });
  //   });
});

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});
