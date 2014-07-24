var domready = require('domready');
var MainView = require('./views/main');

window.app = {
	init: function() {
		var self = this;
		domready(function() {
			self.view = new MainView({
				el: document.body
			});
		});
	}
};

window.app.init();
