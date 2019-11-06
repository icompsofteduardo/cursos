class Mensagem {

    // Padrão do texto é uma string em branco, declarada no parâmetro do constructor ou método.
    constructor(texto = '') {

        this._texto = texto;
    }

    get texto() {
        return this._texto;
    }

    set texto(texto) {
        this._texto = texto;
    }
}