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
	// subviews: {
	// 	howlInfo: {
	// 		container: '[role=howlUserInfo]',
	// 		constructor: HowlUserInfoView
	// 	}
	// }
	render: function() {
		// TODO gideong: figure out if there's a way to get subview a ref to the child model using declarative
		//  syntax instead. The problem is that at construct time, we don't have the user model yet, so we'd need
		//  to specify a keypath in the declaration rather than an actual reference like we have here, but
		//  I don't think keypaths are supported like that.
		this.renderWithTemplate();
		this.renderSubview(new HowlUserInfoView({
			model: this.model.get('user')
		}), '[role=howlUserInfo]');
	}
});
