export class Proveedor{
    id: number;
    nombre: string;
    apellido: string;
    DNI: string;

    constructor(id:number, nombre:string , apellido:string, DNI:string){
        this.id = id
        this.nombre=nombre
        this.apellido=apellido
        this.DNI=DNI
    }

}
