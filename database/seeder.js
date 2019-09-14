var faker = require("faker");
const db = require("./index.js");

var patients = [];

// var randomFirstName = faker.name.firstName();
// var randomLastName = faker.name.lastName();
// var randomAge = Math.floor(Math.random() * 51) + 15;
// var randomSex = randomGender();

let randomGender = function() {
  let number = Math.floor(Math.random() * 5) + 5;
  if (number % 2 === 0) {
    return "m";
  } else {
    return "f";
  }
};
// var patients = [
//   {
//     lastName: "Morio",
//     firstName: "Nubio",
//     age: 32,
//     sex: "m"
//   },
//   {
//     lastName: "Korez",
//     firstName: "Ratalante",
//     age: 43,
//     sex: "m"
//   },
//   {
//     lastName: "Rocatagliatta",
//     firstName: "Lucho",
//     age: 26,
//     sex: "m"
//   }
// ];

for (i = 0; i < 50; i++) {
  patients.push({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    age: Math.floor(Math.random() * 51) + 15,
    sex: randomGender()
  });
}

db.insertManyPatients(patients, err => {
  if (err) {
    console.log(err);
  } else {
    console.log("succesfully seeded");
  }
});
