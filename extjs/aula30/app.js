Ext.onReady(function () {

    Ext.tip.QuickTipManager.init();

    Ext.create('Ext.menu.Menu', {
        width: 200,
        margin: '0 0 10 0',
        floating: false,  // usually you want this set to True (default)
        renderTo: menu1,  // usually rendered by it's containing component
        items: [{
            text: 'regular item 1'
        }, {
            text: 'regular item 2'
        }, {
            text: 'regular item 3',
            menu: Ext.create('Ext.menu.Menu', {
                items: [
                    {
                        text: 'submenu',
                        menu: Ext.create('Ext.menu.Menu', {
                            items: [
                                {
                                    text: 'submenu2'
                                },
                                {
                                    text: 'submenu3',
                                    xtype: 'menuseparator',
                                    handler: function () {
                                        console.log('teste');

                                    }
                                }
                            ]
                        })
                    },
                    {
                        text: 'submenu2'
                    },
                    {
                        text: 'submenu3'
                    }
                ]
            })
        },
        {
            text: 'Escolha uma data',
            menu: Ext.create('Ext.menu.DatePicker', {
                handler: function (dp, date) {
                    Ext.Msg.alert('Date Selected', 'You selected ' + Ext.Date.format(date, 'M j, Y'));
                }
            })
        },
        {
            text: 'Escolha uma cor',
            menu: Ext.create('Ext.menu.ColorPicker', {
                value: '000000',
                listeners: {
                    select: {
                        fn: function (menu, color, opt) {
                            Ext.Msg.alert('Cor selecionada,', 'Você selecionou ' + color);

                        }
                    }
                }
            })
        }
        ]
    });

    Ext.create('Ext.menu.Menu', {
        width: 100,
        plain: true,
        floating: false,  // usually you want this set to True (default)
        renderTo: menu2,  // usually rendered by it's containing component
        items: [{
            text: 'plain item 1'
        }, {
            text: 'plain item 2'
        }, {
            text: 'plain item 3'
        }]
    });
});