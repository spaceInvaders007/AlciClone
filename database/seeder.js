var faker = require("faker");
const db = require("./index.js");

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

var seedPatients = function() {
  let patients = [];
  for (i = 0; i < 230; i++) {
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
      return;
    }
  });
};

var seedNurses = function() {
  let nurses = [];
  for (i = 0; i < 50; i++) {
    nurses.push({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName()
    });
  }

  db.insertManyNurses(nurses, err => {
    if (err) {
      console.log(err);
    } else {
      console.log("succesfully seeded");
      return;
    }
  });
};

var seedDoctors = function() {
  let doctors = [];
  for (i = 0; i < 50; i++) {
    doctors.push({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      areaId: Math.floor(Math.random() * 5) + 1
    });
  }
  //console.log(doctors);

  db.insertManyDoctors(doctors, err => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("succesfully seeded");
      return;
    }
  });
};

var seedResults = function() {
  let results = [
    { studyType: "Parac" },
    { studyType: "Bchem" },
    { studyType: "CK" },
    { studyType: "Umicr" },
    { studyType: "CT" },
    { studyType: "Amy" },
    { studyType: "FBE" },
    { studyType: "Trop" },
    { studyType: "XRay" },
    { studyType: "Trop" },
    { studyType: "bhCG" },
    { studyType: "Bgrou" },
    { studyType: "Coag" },
    { studyType: "INR" },
    { studyType: "BGas" },
    { studyType: "etOH" },
    { studyType: "Ddim" }
  ];

  db.insertManyResults(results, err => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("succesfully seeded");
      return;
    }
  });
};

var seedRecords = function() {
  let records = [];
  for (i = 0; i < 490; i++) {
    records.push({
      patientId: Math.floor(Math.random() * 300) + 1,
      doctorId: Math.floor(Math.random() * 50) + 1,
      description: faker.lorem.paragraph()
    });
  }
  //console.log(doctors);

  db.insertManyRecords(records, err => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("succesfully seeded");
      return;
    }
  });
};

//seedPatients();
// seedDoctors();
// seedNurses();
// seedResults();
//seedRecords();
