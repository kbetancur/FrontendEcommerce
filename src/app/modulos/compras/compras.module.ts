import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComprasRoutingModule } from './compras-routing.module';
import { VerCarritoComponent } from './ver-carrito/ver-carrito.component';
import { VerComprasComponent } from './ver-compras/ver-compras.component';
import { OrdenCompraComponent } from './orden-compra/orden-compra.component';
import { DetalleOrdenCompraComponent } from './detalle-orden-compra/detalle-orden-compra.component';


@NgModule({
  declarations: [
    VerCarritoComponent,
    VerComprasComponent,
    OrdenCompraComponent,
    DetalleOrdenCompraComponent
  ],
  imports: [
    CommonModule,
    ComprasRoutingModule
  ]
})
export class ComprasModule { }
