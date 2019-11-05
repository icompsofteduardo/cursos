class ListaNegociacoes {
    constructor() {
        this._negociacoes = []
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }

    //listar
    get negociacoes() {
        return this._negociacoes;
    }
}