var express = require('express');
var router = express.Router();

StationData = require('../models/stationdata.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET NS Stations json data. */
router.get('/maplayers', function (req, res) {
    StationData.getStationData(function (err, data) {
      if(err){
        res.send(err);
      }
      res.json(data);
    });
});

module.exports = router;
