const express = require('express');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const bodyParser = require('body-parser');
const app = express();
const adapter = new FileSync('db.json');
const db = low(adapter);
app.use(bodyParser.json());

app.get('/api/associations', function (req, res) {
  const associations = db.get('associations').value();
  res.send(associations)
});

app.get('/api/associations/:associationId', function (req, res) {
  const association = db.get('associations')
    .find({id: parseInt(req.params.associationId)})
    .value();
  res.send(association)
});

app.post('/api/dons', function (req, res) {
  const hasDon = db.get('dons')
    .find({hash: req.body.hash})
    .value();
  let don = null;
  if (hasDon === undefined) {
    don = db.get('dons')
      .push(req.body)
      .write();
  } else {
    res.status(400)
  }
  res.send(don);
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
});