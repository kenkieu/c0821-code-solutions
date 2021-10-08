const express = require('express');
const app = express();

app.use((req, res) => {
  res.send('Testing... 1, 2, 3...');
});

app.listen(3000, err => {
  if (err) throw err;
  console.log('Listening on port 3000!');
});
