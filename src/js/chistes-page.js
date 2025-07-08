import { obtenerChiste } from "./http-provider";

const body = document.body;


let btnOtroChiste, orderListChiste;

const crearChistesHtml = () => {
    const html = `    
    <h1 class="mt-5">Chistes</h1>
    <hr>
    <button class="btn btn-primary">Otro chiste</button>
    <ol class="mt-2 list-group">
        
    </ol>`;
     
    const divChistes = document.createElement('div');
    divChistes.innerHTML = html;
    body.append(divChistes);
        
}

//id, value
const dibujarChiste = (chiste,contador) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = ` ${contador}. <b>${chiste.id}</b>: ${chiste.value}`;
    listItem.classList.add('list-group-item');
    orderListChiste.append(listItem);
    contador++;

}

//eventos
const eventos = (contador) => {
    orderListChiste = document.querySelector('ol'); //podria ser por id pero como solo hay uno
    btnOtroChiste = document.querySelector('button');

    btnOtroChiste.addEventListener('click',  async () => {
        btnOtroChiste.disabled = true;
        dibujarChiste(await obtenerChiste(),contador);
        btnOtroChiste.disabled = false;
        contador++;
    });

}




export const init = () => {
    let contador=0;
    crearChistesHtml();
    eventos(contador);
}

