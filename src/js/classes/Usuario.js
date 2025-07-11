
export class Usuario {


    email;
    id = 0;
    first_name;
    avatar;
    static contadorIstancia = 0;

    constructor(id,email,first_name,avatar){
        this.email = email;
        this.id = id;
        this.first_name = first_name
        this.avatar = avatar;
        this.idContador = ++Usuario.contadorIstancia;
    }

}