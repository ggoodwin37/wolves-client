var moment = require('moment');
var Model = require('ampersand-model');

module.exports = Model.extend({
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
	}
});
