import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarProductoComponent } from './components/agregar-producto/agregar-producto.component';
import { CrearPedidoComponent } from './components/crear-pedido/crear-pedido.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { DetallePedidoComponent } from './components/detalle-pedido/detalle-pedido.component';
import { GestionPersonalComponent } from './components/gestion-personal/gestion-personal.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { EntregasComponent } from './components/PedidosyEntregas/entregas/entregas.component';
import { PedidosComponent } from './components/PedidosyEntregas/pedidos/pedidos.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { DetalleEntregaComponent } from './components/detalle-entrega/detalle-entrega.component';
import { DetallesVentasComponent } from './components/detalles-ventas/detalles-ventas.component';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';

const routes: Routes = [
  { path: 'dashboard-admin', component: DashboardAdminComponent},
  { path: 'pedidos', component: PedidosComponent},
  { path: 'entregas', component: EntregasComponent},
  { path: 'detalle-pedido/:id', component: DetallePedidoComponent},
  { path: 'crear-pedido', component: CrearPedidoComponent},
  { path: 'inventario', component: InventarioComponent},
  { path: 'ventas', component: VentasComponent},
  { path: 'detalles-ventas', component: DetallesVentasComponent},
  { path: 'lista-clientes', component: ListaClientesComponent},
  { path: 'agregar-producto', component: AgregarProductoComponent},
  { path: 'reportes', component: ReportesComponent},
  { path: 'personal', component: GestionPersonalComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'dashboard-admin' },
  { path: '', component: DashboardAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
