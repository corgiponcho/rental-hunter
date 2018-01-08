const express = require('express');
const request = require('request');
const router = express.Router();
const app = express();
const path = require('path');
const Zillow  = require('node-zillow')
const bodyParser = require('body-parser');
const async = require('async');
const CREDS = require('./private/credentials.json');
const port = 8080;

app.set("port", port);

app.use(express.static('./'));
app.use(express.static('dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
  console.log(__dirname)
  res.sendFile(path.join(__dirname + '/index/index.html'));
});

// TODO move this elsewhere
process.env
const zwsid = CREDS.zwsid;
const zillow = new Zillow(zwsid)

app.get('/findComps', async (req,res,next) => {
  try {
    const data = await zillow.get('GetZestimate', { zpid: 53990694, rentzestimate: true })
    res.json(data)

  } catch (e) {
    //this will eventually be handled by your error handling middleware
    next(e)
  }

});

app.listen(8080);
