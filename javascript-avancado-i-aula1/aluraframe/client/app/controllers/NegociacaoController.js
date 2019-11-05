class NegociacaoController {

    constructor() {

        let query = document.querySelector.bind(document);
        this._inputData = query('#data');
        this._inputQtd = query('#quantidade');
        this._inputValor = query('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
    }

    adiciona(event) {
        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._limpaFormulario();

        console.log(this._listaNegociacoes.negociacoes);
    }

    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textToDate(this._inputData.value),
            this._inputQtd.value,
            this._inputValor.value
        );
    }

    _limpaFormulario(){
        this._inputData.value = '';
        this._inputQtd.value = 1;
        this._inputValor = 0.0;

        this._inputQtd.focus(); 
    }
}