var View = require('ampersand-view'),
	templates = require('../templates'),
	HowlView = require('../views/howl'),
	NewHowlView = require('../views/new-howl');

module.exports = View.extend({
	template: templates.pages.howls(),
	initialize: function() {
		this.collection = window.app.howls;
	},
	subviews: {
		newHowl: {
			constructor: NewHowlView,
			role: 'new-howl'
		}
	},
	render: function() {
		this.renderWithTemplate();

		this.renderCollection(this.collection, HowlView, this.getByRole('howls'));
	}
});
