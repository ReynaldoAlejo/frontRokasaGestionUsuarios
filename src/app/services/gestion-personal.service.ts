import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {  GestionPersonal} from "../models/gestion-personal";
@Injectable({
  providedIn: 'root'
})
export class GestionPersonalService {


  seleccionarPersonal: GestionPersonal; 
  personal: GestionPersonal[] = [];
  
  constructor(public http:HttpClient) { 
    //añadí valores en la instancia
    this.seleccionarPersonal= new GestionPersonal('','','','','','','','');
  }


//NO HAY API
readonly URL_API='http://localhost:3000/user';
  postPersonal(personal: GestionPersonal){
    return this.http.post('http://localhost:3000/user', personal);  
  }
  getPersonal(){
    return this.http.get('http://localhost:3000/user');  
  }
  putPersonal(personal: GestionPersonal){
    return this.http.put('http://localhost:3000/user'+`/${personal._id}`, personal);
  }

  deletePersonal(_id:string){
    return this.http.delete('http://localhost:3000/user'+`/${_id}`);
  }
}
