class Bind {

    // "..." está definindo que o que chegar a partir do segundo parâmetro
    // será recebido como array, mesmo não sendo esse seu tipo. 
    // Esse parâmetro é definido como um parâmetro REST.
    constructor(model, view, ...props) {
        let proxy = ProxyFactory.create(model, props, model => view.update(model));
        view.update(model);
        return proxy;
    }
}