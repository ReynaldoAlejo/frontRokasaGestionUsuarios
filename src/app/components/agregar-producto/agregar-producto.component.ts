import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styles: [
  ]
})
export class AgregarProductoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getNombre(){
    var nombre= document.getElementById("inputNombre")?.nodeValue;
  }
  agregarProducto(){

  }

}
