/* exported titleCase */
// input: string
// output: string in title case

//* storage for output sentence
//* storage for new word (capitalized)
//* split input into words
//* if word is less than 4 characters and not at first position character then make lowercase
//* if word at current position is javascript or Javascript, then word is JavaScript

// function titleCase(string) {
//   var newString = '';
//   var currentWord = '';
//   for (var i = 0; i < string.length; i++) {
//     if (string[i] === ' ') {
//       newString += currentWord[0].toUpperCase();
//       newString += currentWord.slice(1) + ' ';
//       currentWord = '';
//     } else {
//       currentWord += string[i].toLowerCase();
//     }
//   }
//   newString += currentWord[0].toUpperCase();
//   newString += currentWord.slice(1);
//   console.log(newString);
//   return newString;
// }
