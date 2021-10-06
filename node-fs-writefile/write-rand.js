const fs = require('fs');

var randomNumber = Math.random().toString();

fs.writeFile('random.txt', randomNumber, function (err) {
  if (err) throw err;
  console.error(randomNumber);
});
