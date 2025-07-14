
import { obtenerUsuario } from "./http-provider";
import { Usuario } from "./classes/Usuario";

const body  = document.body;
let refTBody;

const crearHtml = () => {
    
    const html = `
    <h1 class="mt-5"> Usuarios</h1>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">email</th>
                <th scope="col">Nombre</th>
                <th scope="col">Avatar</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.appendChild( div );

    // Crear una referencia al TBODY
    // ya que los TRs van dentro del tbody
            // querySelector('tbody');
            // Crear una variable para mantener la referencia?
    refTBody = document.querySelector('tbody');

}


// La función crearFilaUsuario debería de recibir un UNICO usuario
// con la siguiente estructura
    // {
    //     "id": 7,
    //     "email": "michael.lawson@reqres.in",
    //     "first_name": "Michael",
    //     "last_name": "Lawson",
    //     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
    // }
const crearFilaUsuario = ( usuario ) => {


    // En la tabla deben de colocar un correlativo empezando en 1
    // También deben de colocar el avatar

    const html = `
        <td scope="col"> ${usuario.idContador} </td>
        <td scope="col"> ${usuario.email} </td>
        <td scope="col"> ${usuario.first_name}  ${usuario.last_name}</td>
        <td scope="col">
            <img class="img-thumbnail" src="${usuario.avatar}">
        </td>
    `;

    const tr = document.createElement('tr');
    tr.innerHTML = html;

    // Añadir el table row (tr) dentro del TBody creado anteriormente
    // const refTBody = document.querySelector('tbody');
    // console.log(refTBody);
    refTBody.append(tr);
}



export const init = async() => {
    crearHtml();
    
    //obtener la lista de usuarios
    const usuariosArr = await obtenerUsuario();
    
    usuariosArr.forEach( ({id,email,first_name, last_name,avatar}) => {
        //crear un usuario 
        let usuarioActual = new Usuario(id,email,first_name, last_name,avatar);
        crearFilaUsuario(usuarioActual);
    });
    
    // Obtener la lista de usuarios usando el servicio creado
    // Por cada usuario, llamar la función crearFila (for, forEach)
    // Colocar el init en el index.js, para que se ejecute la creación


}

