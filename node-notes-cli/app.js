const data = require('./data.json');
const fs = require('fs');

const operation = process.argv[2];

if (operation === 'read') {
  for (key in data.notes) {
    console.log(`${key}: ${data.notes[key]}`);
  }
} else if (operation === 'create') {
  data.notes[data.nextId] = process.argv[3];
  Number(data.nextId++);
  const newData = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', newData, function (err) {
    if (err) throw err;
  });
} else if (operation === 'delete') {
  delete data.notes[process.argv[3]];
  const newData = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', newData, function (err) {
    if (err) throw err;
  });
} else if (operation === 'update') {
  data.notes[process.argv[3]] = process.argv[4];
  const newData = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', newData, function (err) {
    if (err) throw err;
  });
}
