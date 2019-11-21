Ext.onReady(function () {

    Ext.tip.QuickTipManager.init();

    Ext.create('Ext.Button', {
        text: 'Botão',
        renderTo: Ext.getBody(),
        iconCls: 'add',
        iconAlign: 'center',
        enableToggle: true,
        toggleHandler: function (btn, state) {
            console.log(state);
            
        }

    });
});
