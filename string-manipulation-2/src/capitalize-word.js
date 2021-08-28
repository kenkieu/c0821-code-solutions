/* exported capitalizeWord */
// input: word
// output: word with first char uppercase, rest lowercase, but if word is javascript, always cased "JavaScript"
// first character make uppercase and assign to storage for output
// look at each character
// assess if word is javascript
// if true, return word "JavaScript"
// otherwise, check each characters one by one and add to storage for output in all lowercase
// return output

function capitalizeWord(word) {
  var str = word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    if (word.toLowerCase() === 'javascript') {
      return 'JavaScript';
    } else {
      str += word[i].toLowerCase();
    }
  }
  return str;
}
