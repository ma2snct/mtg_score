var express = require('express');
var router = express.Router();

var nano = require('nano')('http://localhost:5984');
var db = require('nano')('http://localhost:5984/mtg_score');
var mtg_score = nano.use('mtg_score');

/* GET home page. */
router.get('/', function(req, res, next) {
  mtg_score.list(function(err, body){
    if(err){
      console.log('cannot get list');
    }
    res.render('index', { title: 'MTG-SCORE', rows:body.rows });
    console.log(body.rows)
  });

  mtg_score.get('ブードラ', function(err, body){
    console.log(body);
  });
});

module.exports = router;
