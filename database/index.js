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
  connection.query("INSERT INTO patients SET ?", patient, cb);
};

const insertManyPatients = function(patients, cb = err => {}) {
  let queryString =
    "INSERT INTO patients (lastName, firstName, age, sex) VALUES ";
  let values = patients.map(
    patient =>
      `("${patient.lastName}", "${patient.firstName}", "${patient.age}", upper("${patient.sex}"))`
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
const selectAllResults = function(cb) {
  return connection.query("SELECT * FROM results", cb);
};

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
    "INSERT INTO beds (bedNumber, areaId, patientId, LOS, doctorId, results) VALUES ";
  let values = beds.map(
    bed =>
      `("${bed.bedNumber}", "${bed.areaId}", "${bed.patientId}", "${bed.LOS}", "${bed.doctorId}", "${bed.results}")`
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
  readOneArea,
  selectAllResults
};
