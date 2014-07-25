var hapi = require('hapi');
var moonboots = require('moonboots_hapi');
var config = require('getconfig');
var templatizer = require('templatizer');

var serverHost = 'localhost',
	serverPort = 8080;
var server = hapi.createServer(serverPort, serverHost);
server.pack.register({
	plugin: moonboots,
	options: {
		appPath: '/{p*}',
		moonboots: {
			main: __dirname + '/client/app.js',
			developmentMode: config.isDev,
			stylesheets: [
				__dirname + '/public/css/bootstrap.css'
			],
			beforeBuildJS: function() {
				if (config.isDev) {
					templatizer(__dirname + '/templates', __dirname + '/client/templates.js');
				}

			}
		}
	}
}, function() {
	server.start();
	console.log('wolves is running at ' + serverHost + ':' + serverPort);
});
