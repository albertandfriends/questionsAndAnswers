const express = require('express');
const app = express();
const port = 3200;

app.use(express.static('client'));
app.use(express.json());

app.listen(port, () => {
  console.log("Listening on port " + port);
})