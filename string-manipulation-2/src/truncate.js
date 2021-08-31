/* exported truncate */
// input: length, string
// output: shortened string with ellipsis
// create a storage for the new word(s)
// if there is no input word
// return just elipsis
// otherwise, if the input length is more than the input word', set rule to stop at word length
// set word equal to the string input and add elipsis
// return output
// set a check for characters until length provided
// add each character individually until the specifed length is reached
// add ellipsis to the end
// return new word(s)

function truncate(length, string) {
  var word = '';
  if (string.length === 0) {
    return '...';
  } else if (length > string.length - 1) {
    word = string + '...';
    return word;
  }
  for (var x = 0; x < length; x++) {
    word += string[x];
  }
  word += '...';
  return word;
}
