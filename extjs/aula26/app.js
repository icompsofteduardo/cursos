Ext.onReady(function () {

    Ext.create('Ext.panel.Panel', {
        title: 'Meu primeiro Panel',
        width: 300,
        height: 100,
        html: '<p>Meu primeiro Panel. Esse é o corpo do panel</p>',
        renderTo: 'panel1'
    });

    // ------------------------------- //

    Ext.create('Ext.data.Store', {
        storeId: 'simpsonsStore',
        fields: ['name', 'email', 'phone'],
        data: {
            'items': [
                { 'name': 'Lisa', "email": "lisa@simpsons.com", "phone": "555-111-1224" },
                { 'name': 'Bart', "email": "bart@simpsons.com", "phone": "555-222-1234" },
                { 'name': 'Homer', "email": "home@simpsons.com", "phone": "555-222-1244" },
                { 'name': 'Marge', "email": "marge@simpsons.com", "phone": "555-222-1254" }
            ]
        },
        proxy: {
            type: 'memory',
            reader: {
                type: 'json',
                root: 'items'
            }
        }
    });

    var grid = Ext.create('Ext.grid.Panel', {
        title: 'Simpsons',
        store: Ext.data.StoreManager.lookup('simpsonsStore'),
        columns: [
            { text: 'Name', dataIndex: 'name' },
            { text: 'Email', dataIndex: 'email', flex: 1 },
            { text: 'Phone', dataIndex: 'phone' }
        ],
        height: 200,
        width: 400,
    });

    var panel = Ext.create('Ext.panel.Panel', {
        title: 'Meu primeiro Panel',
        width: 500,
        height: 600,
        items: [
            {
                xtype: 'displayfield',
                fieldLabel: 'Nome',
                name: 'nome',
                value: 'Eduardo Chaves'
            },
            grid
        ],
        renderTo: 'panel2'
    });

    var store = Ext.create('Ext.data.TreeStore', {
        root: {
            expanded: true,
            children: [
                { text: "detention", leaf: true },
                {
                    text: "homework", expanded: true, children: [
                        { text: "book report", leaf: true },
                        { text: "algebra", leaf: true }
                    ]
                },
                { text: "buy lottery tickets", leaf: true }
            ]
        }
    });

    var tree = Ext.create('Ext.tree.Panel', {
        title: 'Simple Tree',
        width: 200,
        height: 150,
        store: store,
        rootVisible: false,
        renderTo: Ext.getBody()
    });

    panel.add(tree)
    // panel.remove(tree)

});