var View = require('ampersand-view');
var templates = require('../templates');

module.exports = View.extend({
	template: templates.includes.newHowl,
	autoRender: true,
	events: {
		'submit [role=new-howl]': 'createNewHowl'
	},
	createNewHowl: function(event) {
		var self = this;
		event.preventDefault();
		window.app.howls.create({
			content: this.get('[name=content]').value,
			createdAt: new Date()
		}, {
			//wait: true,  // could use this to be more defensive and wait until success before adding to collection.
			success: function() {
				self.get('[name=content]').value = '';
			},
			error: function() {
				console.log('Error posting howl.');
			}
		});
	}
});
