class MensagemView {

    constructor(elemento) {
        this._elemento = elemento;
    }

    _template(model) {
        // Esconde mensagem de adicionado com sucesso, caso ainda não tenha uma negociação adicionada.
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p> </p>';
    }

    update(model) {
        this._elemento.innerHTML = this._template(model);
    }
}