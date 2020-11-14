const express = require('express');
const app = express();
const db = require('../database/index.js');
const port = 3200;
const cors = require('cors')

app.use(express.static("client/dist"));
app.use(express.json());
app.use(cors());

app.get("/api/questions", (req, res) => {
  db.getQuestions((err, result) => {
    if (err) {
      res.send("Oh no!")
    } else {
      res.send(result);
    }
  })
})

app.get("/api/answers", (req, res) => {
  // console.log(req.query);
  db.getAnswers(req.query.questionID, (err, result) => {
    if (err) {
      res.send("No answers for this question!")
    } else {
      res.send(result);
    }
  })
})

app.listen(port, () => {
  console.log("Listening on port " + port);
})