var View = require('ampersand-view'),
	ViewSwitcher = require('ampersand-view-switcher');
	templates = require('../templates');

module.exports = View.extend({
	template: templates.body,
	autoRender: true,
	events: {
		'click a[href]': 'handleLinkClick'
	},
	initialize: function() {
		this.listenTo(app.router, 'page', this.handlePage);
	},
	render: function() {
		this.renderWithTemplate();
		this.pages = new ViewSwitcher(this.getByRole('page-container'));
	},
	handlePage: function(pageView) {
		this.pages.set(pageView);
	},
	handleLinkClick: function(event) {
		var aTag = event.target;
		var isLocal = aTag.host === location.host;
		var hasModifiers = event.ctrlKey || event.metaKey || event.shiftKey;
		if (isLocal && !hasModifiers) {
			event.preventDefault();
			app.router.history.navigate(aTag.pathname, {trigger: true});
		}
	}
});
