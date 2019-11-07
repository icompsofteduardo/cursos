class MensagemView extends View {

    constructor(elemento) {
        super(elemento);
    }

    template(model) {
        // Esconde mensagem de adicionado com sucesso, caso ainda não tenha uma negociação adicionada.
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p> </p>';
    }
}