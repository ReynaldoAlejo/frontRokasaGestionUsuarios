export class GestionPersonal {

    //me fallaste fazt

    constructor(_id:'',nombre: '',apellidos: '',password: '',correo: '', dni: '',telefono: '',area: '' ) { 

        this._id=_id;
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.password=password;
        this.correo=correo;
        this.dni=dni;
        this.telefono=telefono;
        this.area=area

    }
    _id: string;
    nombre: string;
    apellidos: string;
    password: string;
    correo: string;
    dni: string;
    telefono: string;
    area: string;
}

