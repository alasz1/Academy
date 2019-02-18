
const palveluurl = '/users/'; // kun proxy asetettu

export function luosanonta(quote /*,callback*/) {
    fetch(palveluurl, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(quote)
      }).then(function(response) {
        /*callback(response);*/
        return (response);
        });
} // tätä voi käyttää pohjana

// palauttaa promisen, eikä kutsu callbackiä
export function deletequote(id /*, callback*/) {
    return fetch(palveluurl+id, {method: 'DELETE'})
        .then(function(response){
            /*callback();*/
        })
}

