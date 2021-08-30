/* exported capitalize */

// Check if first word is upper case
// if lowercase make upper case
// Check if there are more than one letter
// if more letters, make all lower case
// if

function capitalize(word) {
  var str = word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    if (i >= 1) {
      str += word[i].toLowerCase();
    }
  }
  return str;
}
