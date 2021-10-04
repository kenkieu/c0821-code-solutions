/* exported isAnagram */
// input 1: string
// input 2: string
// output: boolean
// create storage for firstArr
// create storage for secondArr
// look over and add each character into firstArr for firstString
// look over second string
// if not a space
// add the character to the secondArr
// sort first and second arr
// if firstArr is equal to secondArr then return true

function isAnagram(firstString, secondString) {
  var firstArr = [];
  var secondArr = [];
  for (var i = 0; i < firstString.length; i++) {
    if (firstString[i] !== ' ') {
      firstArr.push(firstString[i]);
    }
  }
  for (var i = 0; i < secondString.length; i++) {
    if (secondString[i] !== ' ') {
      secondArr.push(secondString[i]);
    }
  }
  var sortedFirstWord = firstArr.sort().join('');
  var sortedSecondWord = secondArr.sort().join('');
  if (sortedFirstWord === sortedSecondWord) {
    return true;
  } else {
    return false;
  }
}
