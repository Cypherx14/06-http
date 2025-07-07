
const jokeUrl = 'https://api.chucknorris.io/jokes/random'; //endpint

// fetch(jokeUrl).then(resp => {
//     resp.json().then( ({id, value}) => {
//         console.log(id);
//         console.log(value);
//     });
// });


fetch(jokeUrl)
    .then(resp => resp.json() ) //esta promesa regresa otra promesa
    .then(({id, value}) => {
        console.log(id);
        console.log(value);
    });
      