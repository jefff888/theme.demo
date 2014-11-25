/*jslint browser: true, undef: true, white: false, laxbreak: true */

/**
 * Test version of the Jarvus Raw container class.
 *
 * User: Jeff.Furgal
 * Date: 11/25/2014
 * Time: 3:15 PM
 */

Ext.define('ThemeDemoApp.container.Raw', {
    extend: 'Ext.container.Container'
    ,xtype: 'rawcontainer'
    ,requires: [
        'ThemeDemoApp.layout.container.Raw'
    ]

    ,layout: 'raw'
});