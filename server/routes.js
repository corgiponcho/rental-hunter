const express = require('express');
const router = express.Router();
const Zillow  = require('node-zillow');
const CREDS = require('../private/credentials.json');

const zwsid = CREDS.zwsid;
const zillow = new Zillow(zwsid)

router.get('/findComps', async (req, res, next) => {
  console.log("finding comps", req.query)

  const { zpid } = req.query;

  try {
    const data = await zillow.get('GetZestimate', { zpid , rentzestimate: true })
    res.json(data)

  } catch (e) {
    //this will eventually be handled by your error handling middleware
    console.error("Server Error", e)
    next(e)
  }
});

module.exports = router
