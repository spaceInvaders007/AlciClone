const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "alcidion"
});

connection.connect();



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

const selectAllDoctors = function(cb) {
  return connection.query("SELECT * FROM doctors", cb);
};

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

//BEDS TABLE

const selectAllBeds = function(cb) {
  return connection.query("SELECT * FROM beds", cb);
};

const insertManyBeds = function(beds, cb = err => {}) {
  let queryString =
    "INSERT INTO beds (bedNumber, areaId, patientId, LOS, doctorId) VALUES ";
  let values = beds.map(
    bed =>
      `("${bed.bedNumber}", "${bed.areaId}", "${bed.patientId}", "${bed.LOS}", "${bed.doctorId}")`
  );
  queryString = queryString.concat(values.join(", "), ";");
  connection.query(queryString, cb);
};

//AREAS TABLE

const selectAllAreas = function(cb) {
  return connection.query("SELECT * FROM areas", cb);
};

const readOneArea = function(id, cb) {
  //console.log(id, 'this is id on DB')
  let sql = "SELECT * FROM areas WHERE areaId = ?";
  connection.query(sql, [id], (error, result) => {
    if (error) {
      cb(console.error(error.message));
    } else {
      cb(null, result);
    }
  });
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
  insertManyRecords,
  insertManyBeds,
  selectAllBeds,
  selectAllDoctors,
  selectAllAreas,
  readOneArea
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
