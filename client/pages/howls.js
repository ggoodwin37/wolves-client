var View = require('ampersand-view'),
	templates = require('../templates'),
	HowlView = require('../views/howl'),
	NewHowlView = require('../views/new-howl');

module.exports = View.extend({
	template: templates.pages.howls(),
	initialize: function() {
		this.collection = app.howls;
	},
	render: function() {
		this.renderWithTemplate();
		var newHowlView = new NewHowlView({
			el: this.getByRole('new-howl')
		});
		//newHowlView.render();  // can do this instead of using autorender:true at view construct

		this.renderCollection(this.collection, HowlView, this.getByRole('howls'));
	}
});
