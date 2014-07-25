var View = require('ampersand-view');
var templates = require('../templates');
var HowlInfoView = require('./howl-info.js');

module.exports = View.extend({
	template: templates.includes.howl,
	bindings: {
		'model.content': {
			type: 'text',
			role: 'content'
		}
	},
	subviews: {
		howlInfo: {
			container: '[role=howlInfo]',
			constructor: HowlInfoView
		}
	}
});
