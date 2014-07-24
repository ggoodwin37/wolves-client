var Model = require('ampersand-model');

module.exports = Model.extend({
	props: {
		id: 'string',
		username: 'string'
	},
	session: {
		access_token: 'string'
	}
});
