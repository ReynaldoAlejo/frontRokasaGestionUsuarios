import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AgregarPersonal } from '../models/agregar-personal';
@Injectable({
  providedIn: 'root'
})
export class AgregarPersonalService {
  
  //fazzzzt me fallaste :'v
//seleccionarPersonal: AgregarPersonal;
  //seleccionarPersonal: AgregarPersonal;
  //el | para no tener errores 
  seleccionarPersonal: AgregarPersonal; 
  personal: AgregarPersonal[] = [];
//lo puse al constructor

//NO HAY API
  readonly URL_API='http://localhost:3000/user';

  constructor(public http:HttpClient) { 
    //añadí valores en la instancia
    this.seleccionarPersonal= new AgregarPersonal('','','','','','','','');
  }

  getPersonal(){
    return this.http.get('http://localhost:3000/user');  
  }
  
  postPersonal(personal: AgregarPersonal){
    return this.http.post('http://localhost:3000/user', personal);  
  }

  putPersonal(personal: AgregarPersonal){
    return this.http.put('http://localhost:3000/user'+`/${personal._id}`, personal);
  }

  deletePersonal(_id:string){
    return this.http.delete('http://localhost:3000/user'+`/${_id}`);
  }
}
