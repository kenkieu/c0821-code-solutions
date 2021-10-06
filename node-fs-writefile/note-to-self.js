const fs = require('fs');

fs.writeFile('note.txt', process.argv[2], function (err) {
  if (err) throw err;
  console.error(process.argv[2]);
});
