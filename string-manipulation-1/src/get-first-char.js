/* exported getFirstChar */

// input: string
// output: first character of string

// Create storage for output
// Check each char to determine if it is the first character
// if first character or only character
// add current letter to output
// return the final output

function getFirstChar(string) {
  var firstChar = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] === string[0]) {
      firstChar = string[i];
    }
  }
  return firstChar;
}

// function getFirstChar(string) {
//   return string[0];
// }
