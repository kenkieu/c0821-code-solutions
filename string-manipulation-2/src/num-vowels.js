/* exported numVowels */
// input: string
// output: number of vowel characters in string
// create reference data for all possible vowels
// create storage to keep track of vowel count
// look at each character letter
// reference each letter and look at possible vowels
// if vowel or capital vowel
// add one to counter storage
// return the number counter

function numVowels(string) {
  var vowelsArr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  var counter = 0;
  for (var i = 0; i < string.length; i++) {
    for (var x = 0; x < vowelsArr.length; x++) {
      if (string[i] === vowelsArr[x]) {
        counter++;
      }
    }
  }
  return counter;
}
