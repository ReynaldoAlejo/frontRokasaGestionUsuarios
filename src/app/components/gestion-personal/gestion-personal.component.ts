import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GestionPersonal } from 'src/app/models/gestion-personal';
import {GestionPersonalService } from "../../services/gestion-personal.service";
@Component({
  selector: 'gestion-personal-admin',
  templateUrl: './gestion-personal.component.html',
  styleUrls: ['./agregar-personal.component.css'],
  providers:[ GestionPersonalComponent]
})
export class GestionPersonalComponent implements OnInit {
  

  constructor( public gestionPersonalService :GestionPersonalService ) { }

  ngOnInit(): void {
    this.getPersonal();
  }


  getPersonal(){
   this.gestionPersonalService.getPersonal()
   .subscribe(res=>{
     this.gestionPersonalService.personal= res as GestionPersonal[];
   })
  };

  editPersonal(personal:GestionPersonal){
    this.gestionPersonalService.seleccionarPersonal=personal;
    
    };

  resetForm(form?: NgForm){
      if(form){
        form.reset();
      }
  };
}