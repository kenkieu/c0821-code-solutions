/* exported getStudentNames */
function getStudentNames(students) {
  var nameArr = [];
  for (var i = 0; i < students.length; i++) {
    nameArr.push(students[i].name);
  }
  return nameArr;
}
