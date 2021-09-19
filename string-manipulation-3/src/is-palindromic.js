/* exported isPalindromic */
// input: string
// output: boolean indicating if it is a palindrome
// create storage for reversed word
// create storage for string without space
// look over each character of string start to end
// if not space, add to storage for copyString
// look over each character of copyString end to start
// add characters one by one into reversed word
// if copyString input is the same as reversed word
// return true
// otherwise return false

function isPalindromic(string) {
  var reversedWord = '';
  var copyString = '';
  for (var x = 0; x < string.length; x++) {
    if (string[x] !== ' ') {
      copyString += string[x];
    }
  }
  for (var i = copyString.length - 1; i >= 0; i--) {
    if (copyString[i] !== (' ')) {
      reversedWord += copyString[i];
    }
  }
  if (reversedWord === copyString) {
    return true;
  } else {
    return false;
  }
}

// function isPalindromic(string) {
//   var copyString = string.replace(' ', '');
//   var reversedWord = '';
//   for (var i = copyString.length - 1; i >= 0; i--) {
//     reversedWord += copyString[i];
//   }
//   if (reversedWord === copyString) {
//     return true;
//   } else {
//     return false;
//   }
// }
