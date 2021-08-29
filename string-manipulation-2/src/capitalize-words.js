/* exported capitalizeWords */
// input: string
// output: string all words capitalized
// create storage for new word
// look at each character
// if space then word
// first letter of each word capitalized
// store into output
// if end of input, then word
// capitalize first letter
// store into output

function capitalizeWords (string){
  var newString = '';
  var currentWord = string[0].toUpperCase();

  for(var i = 1; i < string.length; i++){
    if(string[i] === " "){
      newString += currentWord + " "
      currentWord = '';
    } else {
      currentWord += string[i].toLowerCase();
    }
  }
  newString += currentWord;
  return newString;
}
