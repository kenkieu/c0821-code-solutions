/* exported capitalize */

// Check if first word is upper case
// if lowercase make upper case
// Check if there are more than one letter
// if more letters, make all lower case
// if

function capitalize(word) {
  var str = '';
  for (var i = 0; i < word.length; i++) {
    if (i === 0) {
      str += word[i].toUpperCase();
    } else {
      str += word[i].toLowerCase();
    }
  }
  return str;
}
