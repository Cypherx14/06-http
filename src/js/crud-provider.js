
const urlCRUD = 'https://reqres.in/api/users';

const getUsuario = async(id) => {
    const resp = await fetch(`${urlCRUD}/${id}`, {
        headers: {'x-api-key': 'reqres-free-v1'}
        });

    const {data} = await resp.json();
    return data;
}

const crearUsuario = async(usuario) => {
    const resp = await fetch(urlCRUD, {
            headers: {
                'x-api-key': 'reqres-free-v1',
                'Content-Type' : 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(usuario),
        });
    return await resp.json(); 
}

const actualizarUsuario = async(id, usuario) => {
    const resp = await fetch(`${urlCRUD}/${id}`, {
            headers: {
                'x-api-key': 'reqres-free-v1',
                'Content-Type' : 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(usuario),
        });
    return await resp.json(); 
}

const eliminarUsuario = async (id) => {
    const resp = await fetch(`${urlCRUD}/${id}`, {
            headers: {
                'x-api-key': 'reqres-free-v1',
            },
            method: 'DELETE'
    });
    return (resp.ok) ? 'Borrado' : 'No se pudo eliminar' ;
}


export{
    getUsuario,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario
}
