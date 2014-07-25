var Collection = require('ampersand-rest-collection');
var Howl = require('./howl');

module.exports = Collection.extend({
	model: Howl,
	url: 'http://wolves.technology/howls',
	comparator: function(model) {
		return -1 * model.createdAt.valueOf();
	},
	fetchRealtime: function() {
		var self = this;
		this.fetch();

		// note: would need to send auth header if this endpoint was secured.
		var socket = new WebSocket('ws://wolves.technology');
		socket.onmessage = function(event) {
			var data = JSON.parse(event.data);
			if (data.channel == self.url && data.action == 'update') {
				self.fetchById(data.id);  // super awesome magic collection built-in method
			}
		}
	}
});
