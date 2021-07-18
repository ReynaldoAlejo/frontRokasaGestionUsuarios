import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AgregarPersonal } from 'src/app/models/agregar-personal';
//import { Console } from 'console';

import { AgregarPersonalService } from "../../services/agregar-personal.service";
@Component({
  selector: 'app-agregar-personal',
  templateUrl: './agregar-personal.component.html',
  styleUrls: ['./agregar-personal.component.css'],
  providers:[AgregarPersonalComponent]
})
export class AgregarPersonalComponent implements OnInit {

  constructor(public agregarPersonalService:AgregarPersonalService) { }

  ngOnInit(): void {
    

  }
  addPersonal(form: NgForm){
    if(form.value._id){
      this.agregarPersonalService.putPersonal(form.value)
      .subscribe(res=>{
        console.log(res);
      })
    }else{
      this.agregarPersonalService.postPersonal(form.value)
      .subscribe(res=>{
        this.resetForm(form);
        this.getPersonal();
  
      });
    }
    
  }
//esto tiene que ir en  gestionar
   getPersonal(){
    this.agregarPersonalService.getPersonal()
    .subscribe(res=>{
      this.agregarPersonalService.personal = res as AgregarPersonal[];
      //OPCIONAL
      console.log(res);
    })
  } 

  resetForm(form?: NgForm){
      if(form){
        form.reset();
      }
  }
}
