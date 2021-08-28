/* exported isVowel */
// input: single string character
// output: boolean
// check if string is vowel or capital vowel
// if so, return true
// otherwise false

function isVowel(char) {
  var vowelArr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (var i = 0; i < vowelArr.length; i++) {
    if (char === vowelArr[i]) {
      return true;
    }
  }
  return false;
}
