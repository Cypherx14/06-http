// import {init} from './js/chistes-page';

import * as CRUD  from "./js/crud-provider";


// import { init } from './js/usuarios-page';
// init();

//init de subida de archivos
import { init } from './js/archivos-page';

CRUD.getUsuario(2).then(console.log);

CRUD.crearUsuario({
    name: 'Fernando',
    job: 'Carpintero'
}).then(console.log);

CRUD.actualizarUsuario(1, {
    name: 'Melissa',
    job: 'Developer'
}).then(console.log);

CRUD.eliminarUsuario(1).then(console.log);

init();


