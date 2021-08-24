var student = {
  firstName: 'Ken',
  lastName: 'Kieu',
  age: 27
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName : ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Client Services Coordinator';

console.log('value of student.livesInIrvine: ', student.livesInIrvine);
console.log('value of student.previousOccupation: ', student.previousOccupation);

var vehicle = {
  make: 'Honda',
  model: 'Civic',
  year: 2012
};

vehicle['color'] = 'Black';
vehicle['isConvertible'] = false;
console.log('value of vehicle["color"]: ', vehicle['color']);
console.log('value of vehicle["isConvertible"]: ', vehicle['isConvertible']);
console.log(vehicle);

var pet = {
  name: 'Kona',
  type: 'Dog'
};

delete pet.name;
delete pet.type;

console.log('value of pet: ', pet);
