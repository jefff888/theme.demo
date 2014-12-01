/*jslint browser: true, undef: true, white: false, laxbreak: true */

/**
 * Test version of the Jarvus FieldTable class.
 *
 * User: jfurgal
 * Date: 11/30/14
 * Time: 5:46 PM
 */

Ext.define('ThemeDemoApp.container.table.FieldTable', {
	extend: 'ThemeDemoApp.container.Raw'
	,xtype: 'fieldtable'
	,mixins: {
		fieldAncestor: 'Ext.form.FieldAncestor'
	}
	,requires: [
		'ThemeDemoApp.container.table.Segment'
		,'Ext.util.MixedCollection'
	]

	,autoEl: 'table'
	,componentCls: 'datatable'
	,defaultType: 'tablesegment'

	// Component template methods
	,initComponent: function() {
		var me = this;

		me._errorFields = Ext.create('Ext.util.MixedCollection');

		// create a small buffer so that the header only updates once per wave of field changes
		me.syncErrorHeader = Ext.Function.createBuffered(me.syncErrorHeader, 10, me);

		me.initFieldAncestor();
		me.callParent();
	}

	// FieldAncestor template methods
	,onFieldValidityChange: function(field, isValid) {
		var ef = this._errorFields;

		// keep list of descendant fields with error
		if(isValid && ef.contains(field))
		{
			ef.remove(field);
		}
		else if(!isValid && !ef.contains(field))
		{
			ef.add(field);
		}

		this.syncErrorHeader();
	}

	// private methods
	,syncErrorHeader: function() {
		var me = this
			,tableHeader = me.down('>tableheader')
			,firstErrorField = me._errorFields.first();

		if(tableHeader)
		{
			if(firstErrorField)
			{
				if(me._highlightedField !== firstErrorField)
				{
					if(me._highlightedField && !me._highlightedField.isDestroyed)
					{
						me._highlightedField.removeCls('field-highlighted');
					}
					tableHeader.setError(firstErrorField.getError());
					me._highlightedField = firstErrorField;
					me._highlightedField.addCls('field-highlighted');
				}
			}
			else if(me._highlightedField)
			{
				tableHeader.clearError();
				if(!me._highlightedField.isDestroyed)
				{
					me._highlightedField.removeCls('field-highlighted');
				}
				me._highlightedField = null;
			}
		}
	}
});