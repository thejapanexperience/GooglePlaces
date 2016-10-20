const express = require('express')
const router = express.Router()
const axios = require('axios')
const { GOOGLE } = process.env;
const googleMapsClient = require('@google/maps').createClient({
  key: process.env.GOOGLE
});

console.log('process.env.GOOGLE: ', process.env.GOOGLE)

router.get('/:where', (req, res) => {
  console.log('in search');
  let where = req.params.where
  googleMapsClient.places({
  query: 'Newcastle Upon Tyne Restaurant'
}, function(err, response) {
  if (!err) {
    console.log(response.json.results);
    res.send(response)
  }
});
})

module.exports=router
