function graduate(credential) {
  return function (fullName) {
    return `${fullName}, ${credential}`;
  };
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

medicalSchool('Ken Kieu');
lawSchool('Ken Kieu');

console.log(
  medicalSchool('Ken Kieu'),
  lawSchool('Ken Kieu')
);
