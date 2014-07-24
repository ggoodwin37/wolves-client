var Router = require('ampersand-router');

var HomePage = require('./pages/home'),
	HowlsPage = require('./pages/howls');

module.exports = Router.extend({
	routes: {
		'': 'home',
		'howls': 'howls'
	},

	home: function() {
		console.log('home');
	},
	howls: function() {
		console.log('howls');
	}
});
