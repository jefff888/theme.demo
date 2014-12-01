/*jslint browser: true, undef: true, white: false, laxbreak: true */

/**
 * File description here...
 *
 * User: jfurgal
 * Date: 11/30/14
 * Time: 11:07 PM
 */
Ext.define('ThemeDemoApp.view.MyInformationTable', {
	extend: 'ThemeDemoApp.container.table.FieldTable'
	,xtype: 'setup-myinformationtable'
	,requires: [
		'ThemeDemoApp.container.Raw'
		,'ThemeDemoApp.container.table.Header'
		,'Ext.form.field.Checkbox'
		,'Ext.form.field.Number'
		,'Ext.form.field.Text'
		/*
		,'Jarvus.field.Template'
		,'Jarvus.field.Boolean'
		,'Jarvus.field.Integer'
		,'Jarvus.field.BigMoney'
*/
	]

	,items: [{
		xtype: 'tableheader'
		,columns: [
			{ colCls: 'firstName'		,title: 'Name' }
			,{ colCls: 'retired'		,title: 'Currently Retired?' }
			,{ colCls: 'retirementAge'	,title: 'Desired Retirement Age (Years&nbsp;/&nbsp;Months)' }
			,{ colCls: 'endingAge'		,title: 'Retirement &ldquo;Funding&nbsp;Until&rdquo;&nbsp;Age' }
			,{ colCls: 'annualIncome'	,title: 'Annual Earned Income' }
		]
	},{
		// tbody
		items: [{
			// tr
			cls: 'client'
			,rowPerson: 'client'
			,items: [{
				//xtype: 'templatefield'
				xtype: 'textfield'
				,cls: 'col-name'
				,name: 'clientPersonFirstName'
			},{
				//xtype: 'booleanfield'
				xtype: 'checkbox'
				,cls: 'col-retired'
				,name: 'clientRetirementProfileRetired'
				,colName: 'currentlyRetired'
			},{
				xtype: 'rawcontainer'
				,cls: 'col-retirementAge'
				,colName: 'retirementAge'
				,maskOnDisable: false
				,items: [{
					//xtype: 'integerfield'
					xtype: 'numberfield'
					,cls: 'field-years'
					,name: 'clientRetirementProfileRetirementAge'
					,resetBlank: true
					,disabledPlaceholder: 'N/A'
					,hideTrigger: true
					,keyNavEnabled: false
					,mouseWheelEnabled: false
				},{
					//xtype: 'integerfield'
					xtype: 'numberfield'
					,cls: 'field-months'
					,name: 'clientRetirementProfileRetirementAgeMonths'
					,tip: 'A number between 0 and 11'
					,resetBlank: true
					,disabledPlaceholder: 'N/A'
					,hideTrigger: true
					,keyNavEnabled: false
					,mouseWheelEnabled: false
				}]
			},{
				xtype: 'rawcontainer'
				,cls: 'col-endingAge'
				,items: [{
					//xtype: 'integerfield'
					xtype: 'numberfield'
					,cls: 'field-years'
					,name: 'clientFinancialProfileAnalysisEndingAge'
					,resetBlank: true
					,hideTrigger: true
					,keyNavEnabled: false
					,mouseWheelEnabled: false
				},{
					xtype: 'component'
					,autoEl: { tag: 'span', cls: 'reset-button reset-field', 'data-qtip': 'Set to Client\'s life expectancy' }
				}]
			},{
				//xtype: 'bigmoneyfield'
				//xtype: 'numberfield'
				xtype: 'textfield'
				,cls: 'col-annualIncome'
				,name: 'clientFinancialProfileAnnualEarnedIncome'
				,colName: 'earnedIncome'
				,disabledPlaceholder: 'N/A'
				,monitorChange: 'live'
				//,hideTrigger: true
				//,keyNavEnabled: false
				//,mouseWheelEnabled: false
			}]
		},{
			// tr
			cls: 'spouse'
			,rowPerson: 'spouse'
			,hidden: true
			,items: [{
				//xtype: 'templatefield'
				xtype: 'textfield'
				,cls: 'col-name'
				,name: 'spousePersonFirstName'
			},{
				//xtype: 'booleanfield'
				xtype: 'checkbox'
				,cls: 'col-retired'
				,name: 'spouseRetirementProfileRetired'
				,colName: 'currentlyRetired'
				,monitorChange: 'live'
			},{
				xtype: 'rawcontainer'
				,cls: 'col-retirementAge'
				,colName: 'retirementAge'
				,maskOnDisable: false
				,items: [{
					//xtype: 'integerfield'
					xtype: 'numberfield'
					,cls: 'field-years'
					,name: 'spouseRetirementProfileRetirementAge'
					,resetBlank: true
					,disabledPlaceholder: 'N/A'
					,hideTrigger: true
					,keyNavEnabled: false
					,mouseWheelEnabled: false
				},{
					//xtype: 'integerfield'
					xtype: 'numberfield'
					,cls: 'field-months'
					,name: 'spouseRetirementProfileRetirementAgeMonths'
					,resetBlank: true
					,disabledPlaceholder: 'N/A'
					,hideTrigger: true
					,keyNavEnabled: false
					,mouseWheelEnabled: false
				}]
			},{
				xtype: 'rawcontainer'
				,cls: 'col-endingAge'
				,items: [{
					xtype: 'component'
					,autoEl: { tag: 'span', cls: 'reset-spacer' }
				},{
					//xtype: 'integerfield'
					xtype: 'numberfield'
					,cls: 'field-years'
					,name: 'spouseFinancialProfileAnalysisEndingAge'
					,resetBlank: true
					,hideTrigger: true
					,keyNavEnabled: false
					,mouseWheelEnabled: false
				},{
					xtype: 'component'
					,autoEl: { tag: 'span', cls: 'reset-button reset-field', 'data-qtip': 'Set to Co-Client\'s life expectancy' }
				},{
					xtype: 'component'
					,autoEl: { tag: 'span', cls: 'reset-button reset-both', 'data-qtip': 'Set to joint life expectancy' }
				}]
			},{
				//xtype: 'bigmoneyfield'
				//xtype: 'numberfield'
				xtype: 'textfield'
				,cls: 'field-annualIncome'
				,name: 'spouseFinancialProfileAnnualEarnedIncome'
				,colName: 'earnedIncome'
				,disabledPlaceholder: 'N/A'
				,monitorChange: 'live'
				//,hideTrigger: true
				//,keyNavEnabled: false
				//,mouseWheelEnabled: false
			}]
		}]
	}]

	,initEvents: function() {
		var me = this;
		me.callParent();

		me.mon(me.el, 'click', function(ev, t) {
			var row = ev.getTarget('tr', me.el, true)
				,isSpouse = row.hasCls('spouse')
				,resetBoth = Ext.fly(t).hasCls('reset-both');

			me.fireEvent('ageresetclick', me, isSpouse, resetBoth, row, t, ev);
		}, me, {delegate: '.reset-button'});
	}
});