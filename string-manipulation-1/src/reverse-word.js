/* exported reverseWord */
// input: word
// output: string in reverse order

// create storage for reversed word
// check each character starting from length of word
// add letter to storage
// return new word from storage

function reverseWord(word) {
  var reverse = '';
  for (var i = word.length - 1; i >= 0; i--) {
    reverse += word[i];
  }
  return reverse;
}
