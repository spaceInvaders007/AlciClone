const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "alcidion"
});

connection.connect();

// connection.connect(function(err) {
//   if (err) {
//     return console.error("error: " + err.message);
//   }

//   let createPatients = `create table if not exists patients(
//                         patientId INT NOT NULL UNIQUE AUTO_INCREMENT,
//                         lastName VARCHAR (50) NOT NULL,
//                         firstName VARCHAR (50) NOT NULL,
//                         age INT (3) NOT NULL,
//                         sex VARCHAR (1) NOT NULL,
//                         PRIMARY KEY (patientId)
//                       );`;

//   connection.query(createPatients, function(err, results, fields) {
//     if (err) {
//       console.log(err.message);
//     }
//   });

//   let createAreas = `create table if not exists areas(
//                       areaId INT NOT NULL UNIQUE AUTO_INCREMENT,
//                       areaName VARCHAR (70) NOT NULL,
//                       PRIMARY KEY (areaId)
//                     );`;

//   connection.query(createAreas, function(err, results, fields) {
//     if (err) {
//       console.log(err.message);
//     }
//   });

//   let createRecords = `create table if not exists records(
//                         recordId INT NOT NULL UNIQUE AUTO_INCREMENT,
//                         patientId INT NOT NULL,
//                         doctorId INT NOT NULL,
//                         description VARCHAR (500) NOT NULL,
//                         FOREIGN KEY (patientId)
//                             REFERENCES patients(patientId),
//                         FOREIGN KEY (doctorId)
//                             REFERENCES doctors(doctorId),
//                         PRIMARY KEY (recordId)
//                       );`;

//   connection.query(createRecords, function(err, results, fields) {
//     if (err) {
//       console.log(err.message);
//     }
//   });

//   let createDoctors = `create table if not exists doctors(
//                         doctorId INT NOT NULL UNIQUE AUTO_INCREMENT,
//                         lastName VARCHAR (50) NOT NULL,
//                         firstName VARCHAR (50) NOT NULL,
//                         areaId INT,
//                         FOREIGN KEY (areaId)
//                             REFERENCES areas(areaId),
//                         PRIMARY KEY (doctorId)
//                       );`;

//   connection.query(createDoctors, function(err, results, fields) {
//     if (err) {
//       console.log(err.message);
//     }
//   });

//   let createNurses = `create table if not exists nurses(
//                         nurseId INT NOT NULL UNIQUE AUTO_INCREMENT,
//                         lastName VARCHAR (50) NOT NULL,
//                         firstName VARCHAR (50) NOT NULL,
//                         PRIMARY KEY (nurseId)
//                       );`;

//   connection.query(createNurses, function(err, results, fields) {
//     if (err) {
//       console.log(err.message);
//     }
//   });

//   let createBeds = `create table if not exists beds(
//                       bedId INT NOT NULL UNIQUE AUTO_INCREMENT,
//                       bedNumber INT (3) NOT NULL,
//                       areaId INT,
//                       patientId INT NOT NULL,
//                       LOS INT (4),
//                       FOREIGN KEY (areaId)
//                          REFERENCES areas(areaId),
//                       FOREIGN KEY (patientId)
//                          REFERENCES patients(patientId),
//                       PRIMARY KEY (bedId)
//   );`;

//   connection.query(createBeds, function(err, results, fields) {
//     if (err) {
//       console.log(err.message);
//     }
//   });

//   let createResults = `create table if not exists results(
//                         resultId INT NOT NULL UNIQUE AUTO_INCREMENT,
//                         bedId INT,
//                         studyType VARCHAR (10) NOT NULL,
//                         FOREIGN KEY (bedId)
//                           REFERENCES beds(bedId),
//                         PRIMARY KEY (bedId)
// );`;

//   connection.query(createResults, function(err, results, fields) {
//     if (err) {
//       console.log(err.message);
//     }
//   });

//   connection.end(function(err) {
//     if (err) {
//       return console.log(err.message);
//     }
//   });
// });

//PATIENTS TABLE
const selectAllPatients = function(cb) {
  return connection.query("SELECT * FROM patients", cb);
};

const insertOnePatient = function(patient, cb) {
  console.log("TCL: insertOnePatient -> 'hello'", "hello");
  connection.query("INSERT INTO patients SET ?", patient, cb);
};

const insertManyPatients = function(patients, cb = err => {}) {
  let queryString =
    "INSERT INTO patients (lastName, firstName, age, sex) VALUES ";
  let values = patients.map(
    patient =>
      `("${patient.lastName}", "${patient.firstName}", "${patient.age}", "${patient.sex}")`
  );
  queryString = queryString.concat(values.join(", "), ";");
  connection.query(queryString, cb);
};

//NURSES TABLE

const insertManyNurses = function(nurses, cb = err => {}) {
  let queryString = "INSERT INTO nurses (lastName, firstName) VALUES ";
  let values = nurses.map(
    nurse => `("${nurse.lastName}", "${nurse.firstName}")`
  );
  queryString = queryString.concat(values.join(", "), ";");
  connection.query(queryString, cb);
};

//DOCTORS TABLE

const insertManyDoctors = function(doctors, cb = err => {}) {
  let queryString = "INSERT INTO doctors (lastName, firstName, areaId) VALUES ";
  let values = doctors.map(
    doctor =>
      `("${doctor.lastName}", "${doctor.firstName}", "${doctor.areaId}")`
  );
  queryString = queryString.concat(values.join(", "), ";");
  connection.query(queryString, cb);
};

//RESULTS TABLE
const insertManyResults = function(results, cb = err => {}) {
  let queryString = "INSERT INTO results (studyType) VALUES ";
  let values = results.map(result => `("${result.studyType}")`);
  queryString = queryString.concat(values.join(", "), ";");
  connection.query(queryString, cb);
};

//RECORDS TABLE
const insertManyRecords = function(records, cb = err => {}) {
  let queryString =
    "INSERT INTO records (patientId, doctorId, description) VALUES ";
  let values = records.map(
    record =>
      `("${record.patientId}", "${record.doctorId}", "${record.description}")`
  );
  queryString = queryString.concat(values.join(", "), ";");
  connection.query(queryString, cb);
};

// const selectAll = function(cb) {
//   return connection.query("SELECT * FROM timers", cb);
// };

// //how do you select one from list in mysql
// // const readOne = (id, callback) => {
// //   var text = items[id];
// //   if (!text) {
// //     callback(new Error(`No item with id: ${id}`));
// //   } else {
// //     callback(null, { id, text });
// //   }
// // };

// const readOne = function(id, cb) {
//   let sql = "SELECT * FROM timers WHERE id = ?";
//   connection.query(sql, [id], (error, result) => {
//     if (error) {
//       cb(console.error(error.message));
//     } else {
//       cb(null, result);
//     }
//   });
// };

// const updateOne = function(timer, cb) {
//   var { hours, minutes, seconds, id } = timer;
//   console.log(timer, "this is database timer");
//   console.log(hours, "this is hours ");
//   var params = [hours, minutes, seconds, id];
//   let sql =
//     "UPDATE timers SET hours = ?, minutes = ?, seconds = ?  WHERE id = ?";
//   connection.query(sql, params, (error, result) => {
//     if (error) {
//       cb(console.error(error.message));
//     } else {
//       cb(null, result);
//     }
//   });
// };

// const insertOne = function(timer, cb) {
//   connection.query("INSERT IGNORE INTO timers SET ?", timer, cb);
// };

// const deleteOne = function(id, cb) {
//   let sql = "DELETE FROM timers WHERE id = ?";
//   connection.query(sql, [id], (error, result) => {
//     if (error) {
//       cb(console.error(error.message));
//     } else {
//       cb(null, result);
//     }
//   });
// };

module.exports = {
  selectAllPatients,
  insertOnePatient,
  insertManyPatients,
  insertManyNurses,
  insertManyDoctors,
  insertManyResults,
  insertManyRecords
  // selectAll,
  // insertOne,
  // readOne,
  // deleteOne,
  // updateOne
};

// create table if not exists doctors(
//                           doctorId INT NOT NULL UNIQUE AUTO_INCREMENT,
//                           lastName VARCHAR (50) NOT NULL,
//                           firstName VARCHAR (50) NOT NULL,
//                           areaId INT,
//                           FOREIGN KEY (areaId)
//                               REFERENCES areas(areaId),
//                           PRIMARY KEY (doctorId)
//                         );

// create table if not exists results(
//                           resultId INT NOT NULL UNIQUE AUTO_INCREMENT,
//                           studyType VARCHAR (10) NOT NULL,
//                           PRIMARY KEY (resultId)
//   );

// create table if not exists records(
//                         recordId INT NOT NULL UNIQUE AUTO_INCREMENT,
//                         patientId INT NOT NULL,
//                         doctorId INT NOT NULL,
//                         description VARCHAR (500) NOT NULL,
//                         FOREIGN KEY (patientId)
//                             REFERENCES patients(patientId),
//                         FOREIGN KEY (doctorId)
//                             REFERENCES doctors(doctorId),
//                         PRIMARY KEY (recordId)
