var View = require('ampersand-view'),
	ViewSwitcher = require('ampersand-view-switcher');

module.exports = View.extend({
	template: '<body><h2>This be the main view title</h2><main role="page-container"></main></body>',
	autoRender: true,
	initialize: function() {
		this.listenTo(app.router, 'page', this.handlePage);
	},
	render: function() {
		this.renderWithTemplate();
		this.pages = new ViewSwitcher(this.getByRole('page-container'));
	},
	handlePage: function(pageView) {
		this.pages.set(pageView);
	}
});
