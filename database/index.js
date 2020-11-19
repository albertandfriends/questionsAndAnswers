const mysql = require("mysql");

const db = mysql.createConnection({
  user: "root",
  password: "monkey11",
  database: "questionsAndAnswers"
})

module.exports = {
  getQuestionCount: (callback) => {
    db.query(`SELECT COUNT(*) FROM questions;`, (err, result) => {
      if (err) {
        callback(err, null)
      } else {
        callback(null, result);
      }
    })
  },

  getFilteredQuestions: (start, end, callback) => {
    db.query(`SELECT users.*, questions.* FROM questions INNER JOIN attractions ON questions.attractionID = attractions.id INNER JOIN users ON questions.userID = users.id WHERE questions.id >= ${start} AND questions.id <= ${end};`, (err, result) => {
      if (err) {
        callback(err, null)
      } else {
        callback(null, result);
      }
    })
  },
  getAnswers: (questionID, callback) => {
    db.query(`SELECT users.*, answers.* FROM answers INNER JOIN users ON answers.userID = users.id INNER JOIN questions ON answers.questionsID = questions.id WHERE questions.id = '${questionID}' ORDER BY answers.votes DESC;`, (err, result) => {
      if (err) {
        callback(err, null)
      } else {
        callback(null, result);
      }
    })
  },
  // getMaxVoteAnswer: (questionID, callback) => {
  //   db.query(`SELECT users.*, answers.text, MAX(answers.votes) FROM answers INNER JOIN users ON answers.userID = users.id INNER JOIN questions ON answers.questionsID = questions.id WHERE questions.id = '${questionID}';`, (err, result) => {
  //     if (err) {
  //       callback(err, null);
  //     } else {
  //       callback(null, result);
  //     }
  //   })
  // }
}