const express = require('express');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const app = express();
const adapter = new FileSync('db.json');
const db = low(adapter);

app.get('/api/associations', function (req, res) {

  const associations = db.get('associations').value();
  res.send(associations)
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
});