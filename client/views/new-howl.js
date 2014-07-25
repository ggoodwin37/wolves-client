var View = require('ampersand-view');
var templates = require('../templates');

module.exports = View.extend({
	template: templates.includes.newHowl,
	autoRender: true,
	events: {
		'submit [role=new-howl]': 'createNewHowl'
	},
	createNewHowl: function(event) {
		event.preventDefault();
		app.howls.create({
			content: this.get('[name=content]').value,
			createdAt: new Date()
		});
	}
});
