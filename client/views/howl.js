var View = require('ampersand-view');
var templates = require('../templates');
var HowlUserInfoView = require('./howl-user-info.js');

module.exports = View.extend({
	template: templates.includes.howl,
	bindings: {
		'model.content': {
			type: 'text',
			role: 'content'
		},
		'model.humanCreatedAt': {
			type: 'text',
			role: 'humanCreatedAt'
		}
	},
	subviews: {
		howlInfo: {
			container: '[role=howlUserInfo]',
			constructor: HowlUserInfoView
		}
	}
});
