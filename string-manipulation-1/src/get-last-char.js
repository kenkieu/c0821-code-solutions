/* exported getLastChar */
// input: string
// output: last character of string

// create storage for output
// check if each letter is the last letter
// if letter at current pos is last letter
// store into output
// return the output

function getLastChar(string) {
  var lastChar = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] === string[string.length - 1]) {
      lastChar = string[i];
    }
  }
  return lastChar;
}

// function getLastChar(string) {
//   return string[string.length - 1];
// }
