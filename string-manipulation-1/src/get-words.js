/* exported getWords */

// input: string of 0 or more words
// output: array of strings, separated by the words

// create a storage output
// create storage for words
// check if the string is empty
// if empty return an empty output
// check each character
// if there is a space or end of string
// take current word and store in output
// clear the value of current word
// if current character is letter store in container
// move

function getWords(string) {
  var wordArr = [];
  var currentWord = '';
  if (string === '') {
    return [];
  }
  for (var i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      wordArr.push(currentWord);
      currentWord = '';
    } else {
      currentWord += string[i];
    }
  }
  wordArr.push(currentWord);
  return wordArr;
}

// function getWords(string) {
//   if (string === '') {
//     return [];
//   }
//   return string.split(' ');
// }
