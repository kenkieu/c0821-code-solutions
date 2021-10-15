const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((acc, cur) => acc + cur);
console.log(sum);

const product = numbers.reduce((acc, cur) => acc * cur);
console.log(product);

const balance = account.reduce((acc, cur) => cur.type === 'deposit' ? acc + cur.amount : acc - cur.amount, 0);
console.log(balance);

const composite = traits.reduce((obj, cur) => {
  const newObj = Object.assign(obj, cur);
  return newObj;
}, {});
console.log(composite);
