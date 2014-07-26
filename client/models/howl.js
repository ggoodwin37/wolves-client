var moment = require('moment');
var Model = require('ampersand-model');

var User = require('./user');

module.exports = Model.extend({
	ajaxConfig: function() {
		return {
			headers: {
				'Auth-Token': window.app.me.accessToken
			}
		};
	},
	props: {
		id: 'string',
		content: 'string',
		createdAt: 'date'
	},
	derived: {
		humanCreatedAt: {
			deps: ['createdAt'],
			fn: function() {
				return moment(this.createdAt).fromNow();
			}
		}
	},
	children: {
		user: User
	}
});
