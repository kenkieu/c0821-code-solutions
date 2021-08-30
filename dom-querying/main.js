console.log('Hello World!');
var $h1 = document.querySelector('h1');
console.log('value of $h1:', $h1);
console.dir($h1);

var $explanation = document.querySelector('p#explanation');
console.log('value of $explanation :', $explanation);
console.dir($explanation);

var $hint = document.querySelector('p.hint');
console.log('value of $hint :', $hint);
console.dir($hint);

var $p = document.querySelectorAll('p');
console.log('value of $p:', $p);
console.dir($p);

var $exampleLink = document.querySelectorAll('.example-link');
console.log('value of $exampleLink:', $exampleLink);
console.dir($exampleLink);
