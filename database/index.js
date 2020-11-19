const mysql = require("mysql");

const db = mysql.createConnection({
  user: "root",
  password: "monkey11",
  database: "questionsAndAnswers"
})

const convertToMonth = (month) => {
  if (Number(month) === 1) {
    return "Jan";
  } else if (Number(month) === 2) {
    return "Feb";
  } else if (Number(month) === 3) {
    return "Mar";
  } else if (Number(month) === 4) {
    return "Apr";
  } else if (Number(month) === 5) {
    return "May";
  } else if (Number(month) === 6) {
    return "Jun";
  } else if (Number(month) === 7) {
    return "Jul";
  } else if (Number(month) === 8) {
    return "Aug";
  } else if (Number(month) === 9) {
    return "Sep";
  } else if (Number(month) === 10) {
    return "Oct";
  } else if (Number(month) === 11) {
    return "Nov";
  } else {
    return "Dec";
  }
}

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
    db.query(`SELECT users.*, answers.* FROM answers INNER JOIN users ON answers.userID = users.id INNER JOIN questions ON answers.questionsID = questions.id WHERE questions.id = "${questionID}" ORDER BY answers.votes DESC;`, (err, result) => {
      if (err) {
        callback(err, null)
      } else {
        if (result.length > 0) {
          callback(null, result);
        } else {
          callback(null, questionID);
        }
      }
    })
  },
  insertNewQuestion: (info, callback) => {
    db.query(`SELECT * FROM users WHERE username="${info.username}";`, (err, result) => {
      if (result.length > 0) {
        db.query(`INSERT INTO questions (userID, text, date, attractionID) VALUES ((SELECT id FROM users WHERE username="${info.username}"), "${info.question}", "${convertToMonth(info.date.substring(0, 10).split("-")[1]) + " " + info.date.substring(0, 10).split("-")[0]}", 1);`, (err, result) => {
          if (err) {
            callback(err, null);
          } else {
            callback(null, "Success!");
          }
        })
      } else {
        db.query(`INSERT INTO users (username, location, contributions, votes, profilePic) VALUES ("${info.username}", "${info.location}", "${info.contributions}", "${info.votes}", "${info.profilePic}");`, (err, result) => {
          if (err) {
            callback(err, null)
          } else {
            db.query(`INSERT INTO questions (userID, text, date, attractionID) VALUES ((SELECT id FROM users WHERE username="${info.username}"), "${info.question}", "${info.date.substring(0, 10).split("-")[1] + " " + info.date.substring(0, 10).split("-")[0]}", 1);`, (err, result) => {
              if (err) {
                callback(err, null);
              } else {
                callback(null, "Success!");
              }
            })
          }
        })
      }
    })
  },
  insertNewAnswer: (info, callback) => {
    db.query(`SELECT * FROM users WHERE username="${info.username}";`, (err, result) => {
      if (result.length > 0) {
        db.query(`INSERT INTO answers (questionsID, userID, text, votes, date) VALUES ((SELECT id FROM questions WHERE id=${Number(info.questionID)}), (SELECT id FROM users WHERE username="${info.username}"), "${info.answer}", 0, "${convertToMonth(info.date.substring(0, 10).split("-")[1]) + " " + info.date.substring(0, 10).split("-")[0]}");`, (err, result) => {
          if (err) {
            callback(err, null);
          } else {
            callback(null, result);
          }
        })
      } else {
        db.query(`INSERT INTO users (username, location, contributions, votes, profilePic) VALUES ("${info.username}", "${info.location}", "${info.contributions}", "${info.votes}", "${info.profilePic}");`, (err, result) => {
          if (err) {
            callback(err, null)
          } else {
            db.query(`INSERT INTO answers (questionsID, userID, text, votes, date) VALUES ((SELECT id FROM questions WHERE id=${Number(info.questionID)}), (SELECT id FROM users WHERE username="${info.username}"), "${info.answer}", 0, "${convertToMonth(info.date.substring(0, 10).split("-")[1]) + " " + info.date.substring(0, 10).split("-")[0]}");`, (err, result) => {
              if (err) {
                callback(err, null);
              } else {
                callback(null, result);
              }
            })
          }
        })
      }
    })
  }
}