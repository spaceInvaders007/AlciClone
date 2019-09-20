const express = require("express");
const app = express();
const db = require("./database/index.js");
var cors = require("cors");

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

//const bodyParser = require('body-parser');

// const path = require('path');
// //const retrieve = require('../lib/movieAPI.js').retrieve;
app.use(express.urlencoded());
app.use(express.json());
app.use(cors());
// // app.use(express.static(path.join(__dirname, '../public')));

// app.get('/load', async (req, res) => {
//   try {
//     let data = await retrieve();
//     let timers = data.results;
//     db.insertMany(timers, (err) => {
//       if (err) console.error('error inserting, maybe duplicates');
//       res.end();
//     });
//   } catch (err) {
//     console.error('error here');
//   }
// });

// app.get('/timers', async (req, res) => {
//   db.selectAll((err, timers) => {
//     if (err) throw err;
//     res.json(timers);
//   });
// });

// app.post('/movie', (req, res) => {
//   db.insertOne(req.body);
//   res.status(201).end();
// });

//patients
app.get("/patients", async (req, res) => {
  console.log("this is patients response");
  db.selectAllPatients((err, patients) => {
    if (err) throw err;
    res.json(patients);
  });
});

app.post("/patients", async (req, res) => {
  //console.log(req.body, 'this is the log from the server post function')
  db.insertOnePatient(req.body);
  res.sendStatus(201).end();
});

//beds
app.get("/beds", async (req, res) => {
  console.log("this is beds response");
  db.selectAllBeds((err, patients) => {
    if (err) throw err;
    res.json(patients);
  });
});

//doctors
app.get("/doctors", async (req, res) => {
  console.log("this is doctors response");
  db.selectAllDoctors((err, doctors) => {
    if (err) throw err;
    res.json(doctors);
  });
});

//areas
app.get("/areas", async (req, res) => {
  console.log("this is areas response");
  db.selectAllAreas((err, areas) => {
    if (err) throw err;
    res.json(areas);
  });
});

app.get("/areas/:id", async (req, res) => {
  db.readOneArea(req.params.id, (err, area) => {
    // console.log(req.params.id, 'this is req params id')
    if (area) {
      res.status(200).json(area);
    } else {
      res.sendStatus(404);
    }
  });
});

//results
app.get("/results", async (req, res) => {
  console.log("this is results response");
  db.selectAllResults((err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get("/timers/:id", async (req, res) => {
  db.readOne(req.params.id, (err, timer) => {
    if (timer) {
      res.status(200).json(timer);
    } else {
      res.sendStatus(404);
    }
  });
});

app.delete("/timers/:id", async (req, res) => {
  db.deleteOne(req.params.id, (err, timer) => {
    if (timer) {
      res.status(200).json(timer);
    } else {
      res.sendStatus(404);
    }
  });
});

app.put("/timers/:id", async (req, res) => {
  console.log(req.body);
  console.log("it reached update function on server");
  db.updateOne(req.body, (err, timer) => {
    if (timer) {
      res.status(200).json(timer);
    } else {
      res.sendStatus(404);
    }
  });
});
