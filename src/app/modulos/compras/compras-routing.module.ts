import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleOrdenCompraComponent } from './detalle-orden-compra/detalle-orden-compra.component';
import { OrdenCompraComponent } from './orden-compra/orden-compra.component';
import { VerCarritoComponent } from './ver-carrito/ver-carrito.component';
import { VerComprasComponent } from './ver-compras/ver-compras.component';

const routes: Routes = [
  {
    path:"ver-carrito",
    component:VerCarritoComponent
  },
  {
    path:"ver-compras",
    component:VerComprasComponent
  },
  {
    path:"orden-compra",
    component:OrdenCompraComponent
  },
  {
    path:"detalle-orden-compra",
    component:DetalleOrdenCompraComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComprasRoutingModule { }
