var Model = require('ampersand-model');

module.exports = Model.extend({
	urlRoot: function() {
		return window.app.config.apiUrlBase + '/wolves/me';
	},
	ajaxConfig: function() {
		return {
			headers: {
				'Auth-Token': this.accessToken
			}
		};
	},
	initialize: function() {
		var self = this;
		this.accessToken = localStorage.wolvesAccessToken;

		this.on('change:accessToken', function() {
			if (self.accessToken) {
				localStorage.wolvesAccessToken = self.accessToken;
			} else {
				delete localStorage.wolvesAccessToken;
			}
		});
	},
	props: {
		id: 'string',
		username: 'string'
	},
	session: {
		accessToken: 'string'
	}
});
