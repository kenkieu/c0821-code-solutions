/* exported titleCase */
// input: string
// output: string in title case

// create storage for newstring
// split string and store value
// look at each word in split string
// make each word lowercase
// create value of previous word
// if current word is api
// Add "API"
// else if  current word contains javascript
// and if that word contains a colon
// Add "JavaScript:" to newstring
// otherwise, just add "JavaScript" to newstring
// else if the current word's length is less than 4 and a previous word exists, and the previous word does not include a colon, and the current word is not "web"
// add current word in lowercase to newstring
// else if current word includes a hyphen
// split the hyphenated word in two
// look at each of the hyphenated halves, and if it's not the second half
// capitalize the first word and add a hyphen
// otherwise, capitalize and add the second word with a space to newstring
// else if the current words is not the last word to newstring
// capitalize and add the new word to newstring
// otherwise add capitalize and add the new word to newstring, but do not add a space
// return the newstring


function titleCase(string) {
  var newString = '';
  var splitString = string.split(' ');
  for (var i = 0; i < splitString.length; i++) {
    var currentWord = splitString[i].toLowerCase();
    var previousWord = splitString[i - 1];
    if (currentWord === 'api') {
      newString += 'API';
    } else if (currentWord.includes("javascript")) {
      if (currentWord.includes(":")) {
        newString += "JavaScript: ";
      } else {
        newString += 'JavaScript ';
      }
    } else if (currentWord.length < 4 && (previousWord && !previousWord.includes(":")) && currentWord !== 'web') {
      newString += currentWord.toLowerCase() + ' ';
    } else if (currentWord.includes('-')) {
      var hyphenWord = currentWord.split('-');
      for (var x = 0; x < hyphenWord.length; x++) {
        if (hyphenWord[x] !== hyphenWord[hyphenWord.length - 1]) {
          newString += hyphenWord[x][0].toUpperCase() + hyphenWord[x].slice(1) + '-';
        } else {
          newString += hyphenWord[x][0].toUpperCase() + hyphenWord[x].slice(1) + ' ';
        }
      }
    } else if (currentWord !== splitString[splitString.length - 1]) {
      newString += currentWord[0].toUpperCase() + currentWord.slice(1) + ' ';
    } else {
      newString += currentWord[0].toUpperCase() + currentWord.slice(1);
    }
  }
  return newString;
}
