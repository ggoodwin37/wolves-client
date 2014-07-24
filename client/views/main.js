var View = require('ampersand-view'),
	ViewSwitcher = require('ampersand-view-switcher');
	dom = require('ampersand-dom');
var templates = require('../templates');

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
		this.setActiveNavItem();
	},
	setActiveNavItem: function() {
		var path = window.location.pathname;
		this.getAll('[role=nav-items] a').forEach(function (aTag) {
			if (aTag.pathname === path) {
				dom.addClass(aTag.parentNode, 'active');
			} else {
				dom.removeClass(aTag.parentNode, 'active');
			}
		});
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
