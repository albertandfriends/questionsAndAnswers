const faker = require("faker");
const mysql = require("mysql");

const db = mysql.createConnection({
  user: "root",
  password: "monkey11",
  database: "questionsAndAnswers"
})


const users = () => {
  for (var i = 0; i < 50; i++) {
    // faker.seed(5);
    var randomName = faker.name.findName();
    var randomLocation = faker.address.city() + ", " + faker.address.state();
    var numberContributions = faker.random.number(1000);
    var profilePhoto = faker.image.avatar();
    db.query(`INSERT INTO users (username, location, contributions, profilePic) VALUES ("${randomName}", "${randomLocation}", "${numberContributions}", "${profilePhoto}");`, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("GREAT SUCCESS")
      }
    })
  }
}

const attractions = () => {
  var randomLocation = faker.address.streetAddress() + ", " + faker.address.city() + ", " + faker.address.state();
  db.query(`INSERT INTO attractions (title, reviewCount, duration, address, hours, days, description) VALUES ("Winchester Mystery House", "${faker.random.number(20)}", "${faker.random.number(10)}", "${randomLocation}", "10:00 AM - 4:00 PM", "Monday - Friday", "${faker.lorem.paragraphs()}");`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("GREAT SUCCESS");
    }
  })
}

const questions = () => {
  for (var i = 0; i < 10; i++) {
    db.query(`INSERT INTO questions (userID, text, date, attractionID) VALUES ("${faker.random.number(49) + 1}", "${faker.lorem.paragraph()}", "${faker.date.past()}", 1)`, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("GREAT SUCCESS");
      }
    })
  }
}

const answers = () => {
  for (var i = 0; i < 75; i++) {
    db.query(`INSERT INTO answers (questionsID, userID, text, votes, date) VALUES ("${faker.random.number(9) + 1}", "${faker.random.number(49) + 1}", "${faker.lorem.paragraph()}", "${faker.random.number(50)}", "${faker.date.past()}")`)
  }
}

users();
attractions();
questions();
answers();
console.log("NO ERRORS PRESENT! YAY!")