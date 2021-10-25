const express = require('express');
const path = require('path');

const app = express();

const joinedPath = path.join(__dirname, 'public');
const serveFiles = express.static(joinedPath);

app.use(serveFiles);

app.listen(3000, () => console.log('Listening on port 3000!'));
