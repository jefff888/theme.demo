Ext.define('ThemeDemoApp.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.tab.Panel',
        'ThemeDemoApp.view.MyInformationTable',
        'Ext.layout.container.Border',
        'Ext.window.MessageBox'
    ],
    
    xtype: 'app-main',

    layout: {
        type: 'border'
    },

    items: [{
        // default UI
        region: 'west',
        xtype: 'panel',
        title: 'West',
        split: true,
        width: 150
    }, {
        // custom "highlight" UI
        region: 'center',
        xtype: 'panel',
        layout: 'fit',
        bodyPadding: 20,
        items: [
            {
                xtype: 'panel',
                ui: 'highlight',
                frame: true,
                bodyPadding: 10,
                title: 'Highlight Panel',
                items: [{
                    xtype: 'button',
                    text: 'Show Message',
                    handler: function () {
                        Ext.Msg.show({
                            title: 'Info',
                            msg: 'Message Box with custom icon',
                            buttons: Ext.MessageBox.OK,
                            icon: Ext.MessageBox.INFO
                        });
                    }
                }]
            }
        ]
    }, {
        // neptune "light" UI
        region: 'east',
        xtype: 'panel',
        ui: 'light',
        title: 'East',
        split: true,
        width: 150
    }, {
        // default UI
        region: 'south',
        xtype: 'tabpanel',
        title: 'South',
        split: true,
        height: 200,
        html: '<h1>South</h1>'
        ,items: [{
            cls: 'setup-myinformation'
            ,title: 'My Information'
            ,items: [{
                xtype: 'component'
                ,autoEl: 'header'
                ,cls: 'panel-body-header'
                ,html: '<h1>My Information</h1>'
            },{
                //xtype: 'setup-myinformationtable'
                xtype: 'panel'
                ,html: '<h3>My Information Panel</h3>'
            }]
        }
/*
        ,{
            cls: 'setup-assumptions'
            ,title: 'Assumptions'
            ,items: [{
                xtype: 'component'
                ,autoEl: 'header'
                ,cls: 'panel-body-header'
                ,html: '<h1>Assumptions</h1>'
            },{
                xtype: 'setup-assumptiontable'
            }]
        }
*/
        ]
    }]
});