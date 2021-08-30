/* exported lastChars */
// input: Number
// output: string
// create storage for new word
// look at each character starting at position of the length of the input word
// subtracted by the length (number) of the input
// if the length input exceeds the length of the word
// word storage equals the word
// otherwise, starting from the specified number add each letter into the word storage
// return the word storage

function lastChars (length, string) {
  var modStr = ''
  for(var i = string.length - length; i < string.length; i++) {
    if(length > string.length) {
      modStr = string;
    } else{
      modStr += string[i]
    }
  }
  return modStr;
}
