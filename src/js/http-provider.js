
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

//Cloudinary
const cloudPreset = 'rufrvp1h';
const cloudUrl = 'https://api.cloudinary.com/v1_1/dvfexchfq/upload';



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


//usuarios
const obtenerUsuario = async( ) => {
    
    const resp = await fetch(urlUsuario, {
        headers: {'x-api-key': 'reqres-free-v1'}
        });
    const {data:usuarios} = await resp.json();
    return usuarios;
    
} 

//carga de imagenes a cloudinary archivoSubir: File
const subirImagen = async (archivoSubir) => {
    const formData = new FormData();
    formData.append('upload_preset', cloudPreset);
    formData.append('file', archivoSubir);
    try {
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });
        if(resp.ok) {
            const cloudResp = await resp.json();
            console.log(cloudResp);
            return cloudResp.secure_url;
            
        }else{
            throw await resp.json();
        }
    } catch (error) {
        throw error;
    }
}




export {
    obtenerChiste,
    obtenerUsuario,
    subirImagen
}