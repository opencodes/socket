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
		userinfo : function(req,res,next){
			var user_id = (req.session.user && req.session.user.id)?req.session.user.id:1;
			var friend_id = req.params.id;
			User.getUserInfo(friend_id, function(result,err){
		          if(!err){
		              req.session.chat = result[0]; 
		              next();
		          }            
		     });
		},
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
			
			res.render('chat/list',{list:req.friendlist});
		},
		/**
		 * 
		 * @param req
		 * @param res
		 */
		renderchat : function(req,res){
			console.log(req.session);
			
			res.render('chat/chat',{user:req.session.user,friend:req.session.chat});
		}
		
};
module.exports = Chat;