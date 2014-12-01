/*jslint browser: true, undef: true, white: false, laxbreak: true */

/**
 * Test version of the Jarvus Row container table class.
 *
 * User: jfurgal
 * Date: 11/30/14
 * Time: 5:57 PM
 */
Ext.define('ThemeDemoApp.container.table.Row', {
	extend: 'ThemeDemoApp.container.Raw'
	,xtype: 'tablerow'

	,autoEl: 'tr'
	,defaults: {
		xtype: 'component'
		,autoEl: 'td'
	}
});