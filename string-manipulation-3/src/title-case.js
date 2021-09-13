/* exported titleCase */
// input: string
// output: string in title case

//* storage for output sentence
//* storage for new word (capitalized)
//* split input into words
//* if word is less than 4 characters and not at first position character then make lowercase
//* if word at current position is javascript or Javascript, then word is JavaScript

function titleCase(string) {
  var newString = '';
  var splitString = string.split(' ');
  var firstWord = splitString[0];
  var lastWord = splitString[splitString.length - 1];
  if (firstWord !== ('javascript:' || 'Javascript:')) {
    newString += firstWord[0].toUpperCase();
    newString += firstWord.slice(1) + ' ';
  } else {
    newString = 'JavaScript:' + ' ';
  }
  for (var i = 1; i < splitString.length; i++) {
    var currentWord = splitString[i].toLowerCase();
    var previousWord = splitString[i - 1];
    if (currentWord === 'api') {
      newString += 'API';
    } else if (currentWord.includes("javascript")) {
      if (currentWord.includes(":")) {
        newString += "JavaScript:" + ' '
      } else {
        newString += 'JavaScript' + ' ';
      }
    } else if (currentWord.length < 4 && currentWord !== 'web' && !previousWord.includes(":")) {
      newString += currentWord.toLowerCase() + ' ';
    } else if (currentWord.includes('-')) {
      var hyphenWord = currentWord.split('-');
      for (var x = 0; x < hyphenWord.length; x++) {
        if (hyphenWord[x] !== hyphenWord[hyphenWord.length - 1]) {
          newString += hyphenWord[x][0].toUpperCase();
          newString += hyphenWord[x].slice(1) + '-';
        } else {
          newString += hyphenWord[x][0].toUpperCase();
          newString += hyphenWord[x].slice(1) + ' ';
        }
      }
    } else if (currentWord !== lastWord) {
      newString += currentWord[0].toUpperCase();
      newString += currentWord.slice(1) + ' ';
    } else {
      newString += currentWord[0].toUpperCase();
      newString += currentWord.slice(1);
    }
  }
  console.log(newString)
  return newString;
}
