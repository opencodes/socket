"use strict";
var util = require('util');
var config = require('../config');
module.exports = function(app){
	app.get('/', function(req,res){
		res.render('index');
	});
	
};
