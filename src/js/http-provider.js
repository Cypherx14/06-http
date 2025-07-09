
const jokeUrl = 'https://api.chucknorris.io/jokes/random'; //endpint
const urlUsuario = 'https://reqres.in/api/users?page=2';
// fetch(jokeUrl).then(resp => {
//     resp.json().then( ({id, value}) => {
//         console.log(id);
//         console.log(value);
//     });
// });


// fetch(jokeUrl)
//     .then(resp => resp.json()) //esta promesa regresa otra promesa
//     .then(({ id, value }) => {
//         console.log(id);
//         console.log(value);
//     });

const obtenerChiste = async () => {
    try {
        const resp = await fetch(jokeUrl);
        if (!resp.ok) {
            throw 'No se pudo realizar la peticion';
        }
        const { id, value } = await resp.json(); 
        return { id, value } ;
    } catch (error) {
        //podemos retornar un chiste vacio
        // return {
        //     id: 'no se encontro'
        // }
        // o lanzar el error
        throw error;
    }
}

const obtenerUsuario = async( ) => {
    
    const resp = await fetch(urlUsuario, {
        headers: {'x-api-key': 'reqres-free-v1'}
        });
    const {data:usuarios} = await resp.json();
    return usuarios;
    
} 


export {
    obtenerChiste,
    obtenerUsuario
}