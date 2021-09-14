/* exported student */
var student = {
  firstName: 'Bat',
  lastName: 'Man',
  subject: 'how to disappear mid-sentence',
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
  getIntroduction: function () {
    return 'Hello, my name is ' + this.getFullName() + ' and I am studying ' + this.subject + '.';
  }
}
;
