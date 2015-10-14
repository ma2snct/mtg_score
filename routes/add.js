var express = require('express');
var router = express.Router();
//追加モジュール
var nano = require('nano')('http://localhost:5984');
var db = require('nano')('http://localhost:5984/mtg_score');
var sotsu = nano.use('mtg_score');
var assert = require('assert');

var rows = [];

/* GET users listing. */
router.get('/', function(req, res, next) {
	now = new Date();
	y = now.getFullYear();
	m = now.getMonth()+1;
	d = now.getDate();
	db.insert({year:y, month:m, date:d}, 'ブードラ2', function(err, body, header){
		if(err){
			console.log('it has err');
		}
	});
});




module.exports = router;
