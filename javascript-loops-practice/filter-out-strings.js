/* exported filterOutStrings */
function filterOutStrings(values) {
  var valuesArr = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      valuesArr.push(values[i]);
    }
  }
  return valuesArr;
}
