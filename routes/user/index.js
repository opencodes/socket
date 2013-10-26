"use strict";
var util = require('util');
var user = require('./user');

module.exports = function(app) {
	app.get('/user/login', user.login);
    app.get('/user/myaccount/',user.render);
    app.get('/user/logout/',user.logout);
    app.get('/user/register/',user.registerform);
    app.post('/user/login', user.login);
    app.post('/user/register/',user.register);
};
/*
 * - Saving User Password
 * 1. Fetch User password
 * 2. Generate salt just 2 char 
 * 3. Append userpassword with salt and md5
 * 4. Append md5:salt and save
 * - Validating User
 * 1. Fetch input password
 * 2. Detach salt from password saved for that user
 * 3. if inputpass+salt md5 = detached md5 
 * 4. process login user is valid.
 * 
 */