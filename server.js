const express = require('express');
const request = require('request');
const router = express.Router();
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const async = require('async');

const routes = require('./server/routes.js');

const port = 8080;

app.set("port", port);

app.use(express.static('./'));
app.use(express.static('dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/zillow', routes);

// viewed at http://localhost:8080
app.get('/', function(req, res) {
  console.log(__dirname)
  res.sendFile(path.join(__dirname + '/index/index.html'));
});

app.listen(8080);

module.exports = router;
