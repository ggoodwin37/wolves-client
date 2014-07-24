var domready = require('domready');
var MainView = require('./views/main');
var Router = require('./router');
var Howls = require('./models/howls');

window.app = {
	init: function() {
		var self = this;

		this.howls = new Howls();
		this.howls.fetch();

		this.router = new Router();

		domready(function() {
			self.view = new MainView({
				el: document.body
			});
			self.router.history.start({pushState: true});
		});
	}
};

window.app.init();
