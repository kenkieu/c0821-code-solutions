/* exported isUpperCased */
// input: word
// output: boolean
// Check each word to determine if uppercased
// if all words are uppercase
// return true
// if all words are not uppercase
// return false

function isUpperCased(word) {
  if (word === word.toUpperCase()) {
    return true;
  }
  return false;
}
