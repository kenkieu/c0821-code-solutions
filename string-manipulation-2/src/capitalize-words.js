/* exported capitalizeWords */
// input: string
// output: string all words capitalized
// create storage for new word
// create storage for current word being modified
// look at each character
// if space then word
// take first character, uppercase it, attach remaining letters and store into output
// store into output, and add space for following word
// clear current word
// otherwise, adding remaining characters to current word storage if there are no spaces and making all lowercase
// last word in input string, take first character, uppercase it, attach remaining letters and store into output
// return word storage

function capitalizeWords (string){
  var newString = '';
  var currentWord = '';
  for(var i = 0; i < string.length; i++){
    if(string[i] === " "){
      newString += currentWord.slice(0, 1).toUpperCase() + currentWord.slice(1) + " ";
      currentWord = '';
    } else {
      currentWord += string[i].toLowerCase();
    }
  }
  newString += currentWord.slice(0, 1).toUpperCase() + currentWord.slice(1);
  return newString;
}
