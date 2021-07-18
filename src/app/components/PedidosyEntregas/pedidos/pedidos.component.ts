import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: []
})
export class PedidosComponent  implements OnInit{

  constructor(private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit(){
    
  }

  goDetallePedido(id: number){
    this.router.navigate(['/detalle-pedido', id])
  }
}
