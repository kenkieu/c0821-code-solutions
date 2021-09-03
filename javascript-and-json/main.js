var bookArr = [
  {
    isbn: '6196436000',
    title: 'Pride & Prejudice',
    author: 'Jane Austen'
  },
  {
    isbn: '9780135269',
    title: 'Campbell Biology Concepts & Connections',
    author: 'Martha Taylor'
  },
  {
    isbn: '9780205259',
    title: 'History of Modern Art',
    author: 'Elizabeth C.Mansfield'
  }
];

console.log('value of bookArr:', bookArr);
console.log('type of bookArr:', typeof bookArr);

var stringifyBooks = JSON.stringify(bookArr);
console.log('value of stringifyBooks:', stringifyBooks);
console.log('type of stringifyBooks:', typeof stringifyBooks);

var student = '{"id": "017239281" , "name": "Bilbo Baggins"}';
console.log('value of student:', student);
console.log('type of student:', typeof student);

var parseStudent = JSON.parse(student);
console.log('value of parseStudent:', parseStudent);
console.log('type of parseStudent:', typeof parseStudent);
