const fs = require('fs');

console.log('All processes:', process.argv);

fs.readFile(process.argv[2], 'utf8', function (err, data) {
  if (err) throw err;
  console.log(data);
});
