var Router = require('ampersand-router');

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
