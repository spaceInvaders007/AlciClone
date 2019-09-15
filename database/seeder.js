var faker = require("faker");
const db = require("./index.js");


const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "alcidion"
});



connection.connect(function(err) {
  if (err) {
    return console.error("error: " + err.message);
  }

  let createPatients = `create table if not exists patients(
                        patientId INT NOT NULL UNIQUE AUTO_INCREMENT,
                        lastName VARCHAR (50) NOT NULL,
                        firstName VARCHAR (50) NOT NULL,
                        age INT (3) NOT NULL,
                        sex VARCHAR (1) NOT NULL,
                        PRIMARY KEY (patientId)
                      );`;

  connection.query(createPatients, function(err, results, fields) {
    if (err) {
      console.log(err.message);
    }
  });

  let createAreas = `create table if not exists areas(
                      areaId INT NOT NULL UNIQUE AUTO_INCREMENT,
                      areaName VARCHAR (70) NOT NULL,
                      PRIMARY KEY (areaId)
                    );`;

  connection.query(createAreas, function(err, results, fields) {
    if (err) {
      console.log(err.message);
    }
  });

  let createRecords = `create table if not exists records(
                        recordId INT NOT NULL UNIQUE AUTO_INCREMENT,
                        patientId INT NOT NULL,
                        doctorId INT NOT NULL,
                        description VARCHAR (500) NOT NULL,
                        FOREIGN KEY (patientId)
                            REFERENCES patients(patientId),
                        FOREIGN KEY (doctorId)
                            REFERENCES doctors(doctorId),
                        PRIMARY KEY (recordId)
                      );`;

  connection.query(createRecords, function(err, results, fields) {
    if (err) {
      console.log(err.message);
    }
  });

  let createDoctors = `create table if not exists doctors(
                        doctorId INT NOT NULL UNIQUE AUTO_INCREMENT,
                        lastName VARCHAR (50) NOT NULL,
                        firstName VARCHAR (50) NOT NULL,
                        areaId INT,
                        FOREIGN KEY (areaId)
                            REFERENCES areas(areaId),
                        PRIMARY KEY (doctorId)
                      );`;

  connection.query(createDoctors, function(err, results, fields) {
    if (err) {
      console.log(err.message);
    }
  });

  let createNurses = `create table if not exists nurses(
                        nurseId INT NOT NULL UNIQUE AUTO_INCREMENT,
                        lastName VARCHAR (50) NOT NULL,
                        firstName VARCHAR (50) NOT NULL,
                        PRIMARY KEY (nurseId)
                      );`;

  connection.query(createNurses, function(err, results, fields) {
    if (err) {
      console.log(err.message);
    }
  });

  let createBeds = `create table if not exists beds(
                      bedId INT NOT NULL UNIQUE AUTO_INCREMENT,
                      bedNumber INT (3) NOT NULL,
                      areaId INT,
                      patientId INT NOT NULL,
                      LOS VARCHAR (5),
                      FOREIGN KEY (areaId)
                         REFERENCES areas(areaId),
                      FOREIGN KEY (patientId)
                         REFERENCES patients(patientId),
                      PRIMARY KEY (bedId)
  );`;

  connection.query(createBeds, function(err, results, fields) {
    if (err) {
      console.log(err.message);
    }
  });

  let createResults = `create table if not exists results(
                        resultId INT NOT NULL UNIQUE AUTO_INCREMENT,
                        bedId INT,
                        studyType VARCHAR (10) NOT NULL,
                        FOREIGN KEY (bedId)
                          REFERENCES beds(bedId),
                        PRIMARY KEY (bedId)
);`;

  connection.query(createResults, function(err, results, fields) {
    if (err) {
      console.log(err.message);
    }
  });

  connection.end(function(err) {
    if (err) {
      return console.log(err.message);
    }
  });
});




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
  let randomGender = function() {
    let number = Math.floor(Math.random() * 5) + 5;
    if (number % 2 === 0) {
      return "m";
    } else {
      return "f";
    }
  };
  for (let i = 0; i < 230; i++) {
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
  for (let i = 0; i < 50; i++) {
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
  for (let i = 0; i < 50; i++) {
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
  for (let i = 0; i < 490; i++) {
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

var seedBeds = function() {
  let beds = [];
  for (let j = 1; j < 6; j ++){
    for (let i = 1; i < 51; i++) {
      beds.push({
        bedNumber: i,
        areaId: j,
        patientId: Math.floor(Math.random() * 300) + 1,
        LOS: `${Math.floor(Math.random() * 24) + 1}:${Math.floor(Math.random() * 59) + 0}`
      });
    }
  }
  db.insertManyBeds(beds, err => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("succesfully seeded");
      return;
    }
  });
};


// seedPatients();
// seedDoctors();
// seedNurses();
// seedResults();
// seedRecords();
// seedBeds();