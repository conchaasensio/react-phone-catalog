const express = require('express');
const app = express();
const port = 4000;
const fs = require('fs');
var cors = require('cors');

app.use(cors());

let phonesFromApi = JSON.parse(fs.readFileSync('./phones.json'));

app.get('/phones', (req, res) => {
  res.send(phonesFromApi);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/phones`);
});
