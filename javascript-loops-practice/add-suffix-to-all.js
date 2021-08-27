/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var newWord = [];
  var i = 0;
  while (i < words.length) {
    var word = words[i];
    word += suffix;
    newWord.push(word);
    i++;
  }
  return newWord;
}
