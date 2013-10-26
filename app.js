
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var util = require('util');
var app = express();

// all environments
app.set('port', process.env.PORT || 8012);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.methodOverride());
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({ secret: 'GFHSUSUSS112',expire: 8640000}));
app.use(app.router);
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

require('./routes')(app);

var io = require('socket.io').listen(app.listen(app.get('port')));
console.log('App listening on '+app.get('port'))
io.sockets.on('connection', function (socket) {
    socket.on('send', function (data) {
        io.sockets.emit('message', data);
    });
});
