const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const numA = Number(process.argv[2]);
const numB = Number(process.argv[4]);

if (process.argv[3] === 'plus') {
  console.log(add(numA, numB));
} else if (process.argv[3] === 'minus') {
  console.log(subtract(numA, numB));
} else if (process.argv[3] === 'times') {
  console.log(multiply(numA, numB));
} else if (process.argv[3] === 'over') {
  console.log(divide(numA, numB));
}
