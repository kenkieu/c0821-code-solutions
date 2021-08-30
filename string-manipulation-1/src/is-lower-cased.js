/* exported isLowerCased */

// input: word
// output: boolean (indicating if words are lowercase)
// check if word is all lower case
// if so, return true
// if any other scenario return false

function isLowerCased(word) {
  if (word === word.toLowerCase()) {
    return true;
  }
  return false;
}
