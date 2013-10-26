"use strict";
var util = require('util');
var User = require('../../model/user');

var Chat = {
		list : function(req,res,next){
			User.getFriendList(id ,function(result,err){
		          if(!err){
		            if(crypt.isvalidpass(userpass,result[0].password)){
		              delete result[0]['password'];
		              delete result[0]['created_date'];
		              req.session.user = result[0]; 
		              res.redirect('/chat/list/');
		            }            
		          }
		     });
		},
		render : function(req,res){
			res.render('chat/list');
		}
		
};
module.exports = Chat;