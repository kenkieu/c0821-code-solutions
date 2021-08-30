/* exported firstChars */
// input: length, string
// output: the string at the number of length
// create storage for new word/phrase
// look at characters in string until the specified length
// if length exceeds string
// stored word will equal the input word
//otherwise,
// storage word will equal the word at modified length
// return storage word

function firstChars (length, string) {
  var modStr = ''
  for(var i = 0; i < length; i++) {
    if(length > string.length) {
      modStr = string;
    } else{
      modStr += string[i]
    }
  }
  return modStr;
}
