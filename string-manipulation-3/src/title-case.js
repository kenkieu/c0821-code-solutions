/* exported titleCase */
// input: string
// output: string in title case

//* storage for output sentence
//* storage for new word (capitalized)
//* split input into words
//* if word is less than 4 characters and not at first position character then make lowercase
//* if word at current position is javascript or Javascript, then word is JavaScript

// function titleCase(string) {
//   var newString = '';
//   var splitString = string.split(' ');
//   var firstWord = splitString[0];
//   var lastWord = splitString[splitString.length - 1];
//   if (firstWord !== ('javascript:' || 'Javascript:')) {
//     newString += firstWord[0].toUpperCase();
//     newString += firstWord.slice(1) + ' ';
//   } else {
//     newString = 'JavaScript:' + ' ';
//   }
//   for (var i = 1; i < splitString.length; i++) {
//     // console.log(splitString[i]);
//     if (splitString[i] === 'api') {
//       newString += 'API';
//     } else if (splitString[i] === ('Javascript:')) {
//       newString += 'JavaScript:' + ' ';
//     } else if (splitString[i] === ('javascript' || 'Javascript')) {
//       newString += 'JavaScript' + ' ';
//     } else if (splitString[i].length < 4 && !'web') {
//       newString += splitString[i].toLowerCase() + ' ';
//     } else if (splitString[i].includes('-')) {
//       var hyphenWord = splitString[i].split('-');
//       for (var x = 0; x < hyphenWord.length; x++) {
//         if (hyphenWord[x] !== hyphenWord[hyphenWord.length - 1]) {
//           newString += hyphenWord[x][0].toUpperCase();
//           newString += hyphenWord[x].slice(1) + '-';
//         } else {
//           newString += hyphenWord[x][0].toUpperCase();
//           newString += hyphenWord[x].slice(1) + ' ';
//         }
//       }
//     } else if (splitString[i] !== lastWord) {
//       newString += splitString[i][0].toUpperCase();
//       newString += splitString[i].slice(1) + ' ';
//     } else {
//       newString += splitString[i][0].toUpperCase();
//       newString += splitString[i].slice(1);
//     }
//   }
//   console.log(newString);
//   return newString;
// }

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
    // console.log(splitString[i]);
    if (splitString[i] === 'api') {
      newString += 'API';
    } else if (splitString[i] === ('Javascript:')) {
      newString += 'JavaScript:' + ' ';
    } else if (splitString[i] === ('javascript' || 'Javascript')) {
      newString += 'JavaScript' + ' ';
    } else if (splitString[i].length < 4 && splitString[i] !== 'web') {
      newString += splitString[i].toLowerCase() + ' ';
    } else if (splitString[i].includes('-')) {
      var hyphenWord = splitString[i].split('-');
      for (var x = 0; x < hyphenWord.length; x++) {
        if (hyphenWord[x] !== hyphenWord[hyphenWord.length - 1]) {
          newString += hyphenWord[x][0].toUpperCase();
          newString += hyphenWord[x].slice(1) + '-';
        } else {
          newString += hyphenWord[x][0].toUpperCase();
          newString += hyphenWord[x].slice(1) + ' ';
        }
      }
    } else if (splitString[i] !== lastWord) {
      newString += splitString[i][0].toUpperCase();
      newString += splitString[i].slice(1) + ' ';
    } else {
      newString += splitString[i][0].toUpperCase();
      newString += splitString[i].slice(1);
    }
  }
  return newString;
}
