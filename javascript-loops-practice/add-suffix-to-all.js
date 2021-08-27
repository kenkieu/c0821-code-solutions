/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var newWord = [];
  var i = 0;
  while (i < words.length) {
    words[i] += suffix;
    newWord.push(words[i]);
    i++;
  }
  return newWord;
}
