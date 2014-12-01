/*jslint browser: true, undef: true, white: false, laxbreak: true */

/**
 * Test version of Jarvus table Segment class.
 *
 * User: jfurgal
 * Date: 11/30/14
 * Time: 5:53 PM
 */
Ext.define('ThemeDemoApp.container.table.Segment', {
	extend: 'ThemeDemoApp.container.Raw'
	,xtype: 'tablesegment'
	,requires: [
		'ThemeDemoApp.container.table.Row'
	]

	,autoEl: 'tbody'
	,defaultType: 'tablerow'
});