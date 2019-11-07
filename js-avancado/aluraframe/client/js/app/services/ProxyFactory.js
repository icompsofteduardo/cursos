class ProxyFactory {

    static create(objeto, props, acao) {

        return new Proxy(objeto, {

            get(target, prop, receiver) {

                // Includes utilizado para ver se o array possui o que foi passado no props,
                // após o includes é passado o array que deseja percorrer, com um if, o retorno
                // será true ou false.
                if (props.includes(prop) && ProxyFactory._isFunction(target[prop])) {

                    return function () {
                        Reflect.apply(target[prop], target, arguments);
                        acao(target);
                    }
                }

                return Reflect.get(target, prop, receiver);
            },

            set(target, prop, value, receiver) {

                if (props.includes(prop)) {
                    acao(target);
                }

                return Reflect.set(target, prop, value, receiver);
            }
        });
    }

    static _isFunction(func) {
        return typeof (func) == typeof (Function);
    }
}