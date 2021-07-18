import { Proveedor } from "./proveedor";
export class Pedidos{
    id:number;
    nombreProveedor: string;
    fecha: string;
    monto: number;
    constructor(id: number, proveedor:Proveedor, fecha:string, monto:number){
        this.id=id;
        this.nombreProveedor= proveedor.nombre;
        this.fecha=fecha;
        this.monto=monto;
    }
}