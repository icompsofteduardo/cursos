class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(),
            new NegociacoesView($('#negociacoesView')),
            'adiciona', 'esvazia');

        this._mensagem = new Bind(
            new Mensagem(),
            new MensagemView($('#mensagemView')),
            'texto');

        // A arrow function tem escopo léxico, o contexto dela não muda como uma função comum,
        //por isso o contexto(this) dela é NegociaçãoController e não mais ListaNegociações.
        //this._listaNegociacoes = new ListaNegociacoes(model => this._negociacoesView.update(model));   
        ProxyFactory.create(new ListaNegociacoes(),
            ['adiciona', 'esvazia'],
            model => this._negociacoesView.update(model))

        ProxyFactory.create(new Mensagem(),
            ['texto'], model => this._mensagemView.update(model));

    }

    adiciona(event) {

        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = 'Negociacao adicionada com sucesso';
        this._limpaFormulario();
    }

    importaNegociacoes() {

        let service = new NegociacaoService();

        // .all é uma função das promises que pega
        // todas as promises e define a ordem de execução,
        // também trata todos os erros em um só lugar
        // (ela recebe um array, por isso o uso do []).
        Promise.all([
            service.obterNegociacoesSemana(),
            service.obterNegociacoesAnterior(),
            service.obterNegociacoesRetrasada()]
        ).then(negociacoes => {
            negociacoes
                .reduce((arrayAchatado, array) => arrayAchatado.concat(array), [])
                .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
            this._mensagem.texto = 'Negociações importadas com sucesso'
        }).catch(erro => this._mensagem.texto = erro);
    }

    apaga() {
        this._listaNegociacoes.esvazia();
        this._mensagem.texto = 'Negociações apagadas com sucesso!';
    }

    _criaNegociacao() {

        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);
    }

    _limpaFormulario() {

        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();
    }
}