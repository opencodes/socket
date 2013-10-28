"use strict";
var util = require('util');
var config = require('../config');
var user = require('./user/user');  
var chat = require('./chat/chat');
module.exports = function(app){
	app.get('/', function(req,res,next){
		console.log(req.session);
		if(!req.session.user){
			res.redirect('/user/login');
		}else{
			res.render('index');
		}		
	});
	app.get('/user/login', user.loginform);
    app.get('/chat/user/:id',chat.userinfo,chat.renderchat);
    app.get('/chat/list/',chat.list,chat.render);
    app.get('/user/logout/',user.logout);
    app.get('/user/register/',user.registerform);
    app.post('/user/login', user.login);
    app.post('/user/register/',user.register);
};
