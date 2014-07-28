var Model = require('ampersand-model');

var AVATAR_SIZE_STR = '40x40';  // TODO gideong: improve?

module.exports = Model.extend({
	props: {
		id: 'string',
		username: 'string'
	},
	derived: {
		avatar: {
			deps: ['id'],
			fn: function() {
				return 'http://robohash.com/' + this.id + '?size=' + AVATAR_SIZE_STR;
			}
		}
	}
});
