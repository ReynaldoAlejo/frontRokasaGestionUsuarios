import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PedidosComponent } from './components/PedidosyEntregas/pedidos/pedidos.component';
import { EntregasComponent } from './components/PedidosyEntregas/entregas/entregas.component';
import { DetallePedidoComponent } from './components/detalle-pedido/detalle-pedido.component';
import { CrearPedidoComponent } from './components/crear-pedido/crear-pedido.component';
import { InventarioComponent } from "./components/inventario/inventario.component";
import { AgregarProductoComponent } from './components/agregar-producto/agregar-producto.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { GestionPersonalComponent } from './components/gestion-personal/gestion-personal.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { DetallesVentasComponent } from './components/detalles-ventas/detalles-ventas.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PedidosComponent,
    EntregasComponent,
    DetallePedidoComponent,
    CrearPedidoComponent,
    InventarioComponent,
    VentasComponent,
    DetallePedidoComponent,
    AgregarProductoComponent,
    DashboardAdminComponent,
    ReportesComponent,
    ListaClientesComponent,
    GestionPersonalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, SidebarComponent]
})
export class AppModule { }
