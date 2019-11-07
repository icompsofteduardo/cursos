class HttpService {

    get(url) {

        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest();

            xhr.open('GET', url);

            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    // state == 4 -> significa requisição
                    // concluida e resposta pronta

                    if (xhr.status == 200) {
                        // status == 200 -> significa que a
                        // requisição ocorreu sem problemas.

                        // Resolve é um parâmetro da promise que define o que deve
                        // ser retornado como certo pela promise.
                        resolve(JSON.parse(xhr.responseText));
                    } else {
                        console.log(xhr.responseText);
                        reject(xhr.responseText);
                        // Reject é o outro parâmetro da promise, que define o que deve
                        // retornar se o promise for rejeitado.
                    }
                }
            };
            xhr.send();
        });
    }
}