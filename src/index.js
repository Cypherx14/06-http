import {init} from './js/chistes-page';
import { obtenerUsuario } from './js/http-provider';


// init();

obtenerUsuario().then(console.log);

