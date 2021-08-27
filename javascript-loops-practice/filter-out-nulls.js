/* exported filterOutNulls */
function filterOutNulls(values) {
  var valueArr = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      valueArr.push(values[i]);
    }
  }
  return valueArr;
}
