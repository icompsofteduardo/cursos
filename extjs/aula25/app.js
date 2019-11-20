Ext.onReady(function () {

    Ext.create('Ext.Button', {
        text: 'Alerta',
        renderTo: 'btnAlert',
        handler: function () {
            Ext.MessageBox.alert('Alerta', 'Simples alerta', function (btn) {
                console.log('Apertou o botão ' + btn);

            });
        }
    });

    Ext.create('Ext.Button', {
        text: 'Confirmação',
        renderTo: 'btnConfirm',
        handler: function () {
            Ext.MessageBox.confirm('Alerta', 'Deseja deletar?', function (btn) {
                console.log('Apertou o botão ' + btn);
                if (btn == 'yes') {
                    Ext.MessageBox.alert('Mensagem', 'Registro deletado com sucesso');
                }
            });
        }
    });

    Ext.create('Ext.Button', {
        text: 'Prompt',
        renderTo: 'btnPrompt',
        handler: function () {
            Ext.MessageBox.prompt('Prompt', 'Qual é o seu nome?', function (btn, text) {
                console.log('Apertou o botão ' + btn);
                console.log('Entrou com o texto ' + text);

                if (btn == 'ok') {
                    Ext.MessageBox.alert('Bem vindo!', 'Bem vindo, ' + text + "!");
                }
            });
        }
    });

    Ext.create('Ext.Button', {
        text: 'Prompt Multiline',
        renderTo: 'btnPromptMultiline',
        handler: function () {
            Ext.MessageBox.prompt('Prompt', 'O que você gosta de fazer?', function (btn, text) {
                console.log('Apertou o botão ' + btn);
                console.log('Entrou com o texto ' + text);

                if (btn == 'ok') {
                    Ext.MessageBox.alert('Mensagem!', text);
                }
            },
                this,
                true,
                'Descreva aqui o que você gosta de fazer.'
            );
        }
    });

    Ext.create('Ext.Button', {
        text: 'Icone - ERROR',
        renderTo: 'btnErro',
        handler: function () {
            Ext.MessageBox.show({
                title: 'Erro!',
                msg: 'Alguma coisa deu errado!',
                icon: Ext.MessageBox.ERROR
            });
        }
    });

    Ext.create('Ext.Button', {
        text: 'Icone - INFO',
        renderTo: 'btnInfo',
        handler: function () {
            Ext.MessageBox.show({
                title: 'Info!',
                msg: ' Registro deletado com sucesso!',
                icon: Ext.MessageBox.INFO
            });
        }
    });
    Ext.create('Ext.Button', {
        text: 'Icone - QUESTION',
        renderTo: 'btnQuestion',
        handler: function () {
            Ext.MessageBox.show({
                title: 'Question',
                msg: 'Você tem certeza que quer fazer isso?',
                icon: Ext.MessageBox.QUESTION
            });
        }
    });

    Ext.create('Ext.Button', {
        text: 'Icone - WARNING',
        renderTo: 'btnWarning',
        handler: function () {
            Ext.MessageBox.show({
                title: 'Warning',
                msg: 'Por favor, cancele a operação.',
                icon: Ext.MessageBox.WARNING
            });
        }
    });

    Ext.create('Ext.Button', {
        text: 'Botão - CANCEL',
        renderTo: 'btnCancel',
        handler: function () {
            Ext.MessageBox.show({
                title: 'Cancel!',
                msg: 'Por favor, cancele a operação.',
                icon: Ext.MessageBox.WARNING,
                buttons: Ext.MessageBox.CANCEL,
                fn: function (btn) {
                    console.log('Apertou o botão ' + btn)
                }
            });
        }
    });

    Ext.create('Ext.Button', {
        text: 'Botão - NO',
        renderTo: 'btnNo',
        handler: function () {
            Ext.MessageBox.show({
                title: 'BOTÃO - NÃO!',
                msg: 'Você está bem?',
                icon: Ext.MessageBox.INFO,
                buttons: Ext.MessageBox.NO,
                fn: function (btn) {
                    console.log('Apertou o botão ' + btn)
                }
            });
        }
    });

    Ext.create('Ext.Button', {
        text: 'Botão - OK',
        renderTo: 'btnOk',
        handler: function () {
            Ext.MessageBox.show({
                title: 'BOTÃO - OK!',
                msg: 'Eu gosto de ExtJS',
                icon: Ext.MessageBox.INFO,
                buttons: Ext.MessageBox.OK,
                fn: function (btn) {
                    console.log('Apertou o botão ' + btn)
                }
            });
        }
    });

    Ext.create('Ext.Button', {
        text: 'Botão - OKCANCEL',
        renderTo: 'btnOkCancel',
        handler: function () {
            Ext.MessageBox.show({
                title: 'BOTÃO - OKCANCEL!',
                msg: 'Você quer deletar o registro? ',
                icon: Ext.MessageBox.QUESTION,
                buttons: Ext.MessageBox.OKCANCEL,
                fn: function (btn) {
                    console.log('Apertou o botão ' + btn)
                }
            });
        }
    });

    Ext.create('Ext.Button', {
        text: 'Botão - YES',
        renderTo: 'btnYes',
        handler: function () {
            Ext.MessageBox.show({
                title: 'BOTÃO - YES!',
                msg: 'Você quer deletar o registro? ',
                icon: Ext.MessageBox.QUESTION,
                buttons: Ext.MessageBox.YES,
                fn: function (btn) {
                    console.log('Apertou o botão ' + btn)
                }
            });
        }
    });

    Ext.create('Ext.Button', {
        text: 'Botão - YESNO',
        renderTo: 'btnYesNo',
        handler: function () {
            Ext.MessageBox.show({
                title: 'BOTÃO - YESNO!',
                msg: 'Você quer deletar o registro? ',
                icon: Ext.MessageBox.QUESTION,
                buttons: Ext.MessageBox.YESNO,
                fn: function (btn) {
                    console.log('Apertou o botão ' + btn)
                    if (btn == 'yes') {
                        Ext.MessageBox.alert('Mensagem', 'Registro deletado com sucesso!');
                    }
                }
            });
        }
    });

    Ext.create('Ext.Button', {
        text: 'Botão - YESNOCANCEL',
        renderTo: 'btnYesNoCancel',
        handler: function () {
            Ext.MessageBox.show({
                title: 'BOTÃO - YESNOCANCEL!',
                msg: 'Você quer deletar o registro? ',
                buttons: Ext.MessageBox.YESNOCANCEL,
                fn: function (btn) {
                    console.log('Apertou o botão ' + btn)
                    if (btn == 'yes') {
                        Ext.MessageBox.alert('Mensagem', 'Registro deletado com sucesso!');
                    } else if (btn == 'no') {
                        Ext.MessageBox.alert('Mensagem', 'Ok, não vou deletar o registro!');
                    } else if (btn == 'cancel') {
                        Ext.MessageBox.alert('Mensagem', 'Operação cancelada com sucesso!');
                    }
                }
            });
        }
    });

    Ext.create('Ext.Button', {
        text: 'Show - Prompt',
        renderTo: 'btnShowPrompt',
        handler: function () {
            Ext.MessageBox.show({
                title: 'BOTÃO - ShowPrompt!',
                msg: 'Você quer deletar o registro? Por que? ',
                prompt: true,
                width: 250,
                buttons: Ext.MessageBox.OK,
                fn: function (btn, text) {
                    console.log('Apertou o botão ' + btn)
                    console.log('Texto que escreveu: ' + text);

                }
            });
        }
    });

    Ext.create('Ext.Button', {
        text: 'Show - PromptMultiline',
        renderTo: 'btnPromptMultilineSemModal',
        handler: function () {
            Ext.MessageBox.show({
                title: 'BOTÃO - ShowPrompt!',
                msg: 'Você quer deletar o registro? Por que? ',
                multiline: true,
                width: 250,
                modal: false,
                buttons: Ext.MessageBox.OK,
                fn: function (btn, text) {
                    console.log('Apertou o botão ' + btn)
                    console.log('Texto que escreveu: ' + text);
                }
            });
        }
    });

    Ext.create('Ext.Button', {
        text: 'Show - Progresso ',
        renderTo: 'btnProgresso',
        handler: function () {
            Ext.MessageBox.show({
                title: 'Progresso',
                msg: 'Carregando os dados...',
                progressText: 'carregando...',
                progress: true,
                closable: false,
                width: 300
            });

            var f = function (v) {
                return function () {
                    if (v == 12) {
                        Ext.MessageBox.hide();
                        Ext.MessageBox.alert('Pronto!', 'Os dados foram carregados!');
                    } else {
                        var i = v / 11;
                        Ext.MessageBox.updateProgress(i, Math.round(100 * i) + '%');
                    }
                }
            }

            for (var i = 1; i < 13; i++) {
                setTimeout(f(i), i * 250);
            }
        }
    });

    Ext.create('Ext.Button', {
        text: 'Show - PromptMultiline',
        renderTo: 'btnPromptMultiline',
        handler: function () {
            Ext.MessageBox.show({
                title: 'BOTÃO - ShowPrompt!',
                msg: 'Você quer deletar o registro? Por que? ',
                multiline: true,
                width: 250,
                modal: false,
                buttons: Ext.MessageBox.OK,
                fn: function (btn, text) {
                    console.log('Apertou o botão ' + btn)
                    console.log('Texto que escreveu: ' + text);
                }
            });
        }
    });

    Ext.create('Ext.Button', {
        text: 'Show - Wait ',
        renderTo: 'btnWait',
        handler: function () {
            Ext.MessageBox.show({
                title: 'Espere',
                msg: 'Salvando os dados...',
                wait: true,
                waitConfig: {
                    interval: 200
                },
                closable: false,
                width: 300
            });

            setTimeout(function () {
                Ext.MessageBox.hide();
                Ext.MessageBox.alert('Pronto!', 'Os dados foram salvos com sucesso');
            }, 3000);
        }
    });

    Ext.create('Ext.Button', {
        text: 'Botão - Custom',
        renderTo: 'btnYesNoCancelCustom',
        handler: function () {
            Ext.MessageBox.show({
                title: 'Botão - Custom!',
                msg: 'Você quer deletar o registro? ',
                buttons: Ext.MessageBox.YESNOCANCEL,
                buttonText: {
                    yes: 'Sim',
                    no: 'Não',
                    cancel: 'Cancelar'
                },
                fn: function (btn) {
                    console.log('Apertou o botão ' + btn)
                    if (btn == 'yes') {
                        Ext.MessageBox.alert('Mensagem', 'Registro deletado com sucesso!');
                    } else if (btn == 'no') {
                        Ext.MessageBox.alert('Mensagem', 'Ok, não vou deletar o registro!');
                    } else if (btn == 'cancel') {
                        Ext.MessageBox.alert('Mensagem', 'Operação cancelada com sucesso!');
                    }
                }
            });
        }
    });
});