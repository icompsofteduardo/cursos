Ext.Loader.setConfig({ enabled: true });

Ext.define('Blog.Toolbar', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.minhatoolbar',
    //renderTo: document.body,
    width: 500,
    items: [
        { xtype: 'tbfill' }, // '->
        {
            // xtype: 'button', // default for Toolbars
            text: 'Button'
        },
        { xtype: 'tbspacer', width: 20 },
        {
            xtype: 'splitbutton',
            text: 'Split Button'
        },
        { xtype: 'tbspacer' }, // ' '
        { xtype: 'tbseparator' }, // '-'
        { xtype: 'tbspacer' },
        {
            xtype: 'button',
            text: 'B'
        },
        {
            xtype: 'button',
            text: 'I'
        },
        {
            xtype: 'button',
            text: 'U'
        }
    ]
});


Ext.onReady(function () {
    Ext.create('Ext.panel.Panel', {
        title: 'Aula 30 - Curso EXTJS',
        width: 400,
        height: 400,
        renderTo: Ext.getBody(),
        html: 'teste',

        dockedItems: [
            { xtype: 'minhatoolbar' }
        ],
    });
}); 