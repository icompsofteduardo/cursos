class NegociacoesView {

    constructor(elemento) {
        this._elemento = elemento
    }

    _template(model) {

        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
                ${model.negociacoes.map(n => `
                        <tr>
                            <td> ${DateHelper.dataParaTexto(n.data)} </td>
                            <td> ${n.quantidade} </td>
                            <td> ${n.valor} </td>
                            <td> ${n.volume} </td>
                        </tr>
                        `).join('')
            // O join foi utilizado para concatenar todos os tds, para tirar
            // a necessidade do uso de concatenação de linhas com "" + ""
            } 
            </tbody>
            
            <tfoot>
            <td colspan="3"></td>
            <td> 
            ${
            // Percorre todas as negociações, utilizando o reduce para retornar
            // apenas um valor, de todos os volumes somados.
            // o 0,0 utilizado após os parâmetros é a inicialização da varíavel
            // total.
            model.negociacoes.reduce((total, n) => total + n.volume, 0.0)
            }
            </td>
            </tfoot >
        </table >

    `
    }

    update(model) {
        this._elemento.innerHTML = this._template(model);
    }
}