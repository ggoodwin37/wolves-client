var View = require('ampersand-view');
var templates = require('../templates');

module.exports = View.extend({
	template: templates.includes.howlUserInfo,
	bindings: {
		'model.username': '[role=username]',
		'model.avatar': {
			type: 'attribute',
			role: 'avatarUrl',
			name: 'src'
		}
	}
});
