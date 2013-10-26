"use strict";
var util = require('util');
var User = require('../../model/user');

var Chat = {
		/**
		 * 
		 * @param req
		 * @param res
		 * @param next
		 */
		list : function(req,res,next){
			var user_id = (req.session.user && req.session.user.id)?req.session.user.id:1;
			User.getFriendList(user_id ,function(result,err){
		          if(!err){
		              req.friendlist = result; 
		              next();
		          }            
		     });
		},
		/**
		 * 
		 * @param req
		 * @param res
		 */
		render : function(req,res){
			console.log(req.friendlist);
			res.render('chat/list',{list:req.friendlist});
		}
		
};
module.exports = Chat;