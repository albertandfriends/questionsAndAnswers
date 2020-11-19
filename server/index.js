const express = require('express');
const app = express();
const db = require('../database/index.js');
const port = 3200;
const cors = require('cors')

app.use(express.static("client/dist"));
app.use(express.json());
app.use(cors());

app.get("/api/count", (req, res) => {
  db.getQuestionCount((err, result) => {
    if (err) {
      res.send("Oh no!")
    } else {
      var pageLimit = 5;
      var newResult = Math.ceil(Object.values(result[0])[0] / pageLimit);
      var newArray = [];
      for (var i = 1; i <= newResult; i++) {
        newArray.push(i);
      }
      res.send(newArray);
    }
  })
})

app.get("/api/questions", (req, res) => {
  db.getFilteredQuestions(req.query.start, req.query.end, (err, result) => {
    if (err) {
      res.send(err)
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
      var newResult = {};
      newResult.answers = result;
      newResult.showAllAnswers = false;
      var mostVoted = result[0];
      for (var i = 1; i < result.length; i++) {
        if (result[i].votes > mostVoted.votes) {
          mostVoted = result[i];
        }
      }
      newResult.mostVoted = mostVoted;
      res.send(newResult);
    }
  })
})

app.post("/api/add", (req, res) => {
  db.insertNewQuestion(req.body, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  })
})

app.listen(port, () => {
  console.log("Listening on port " + port);
})




