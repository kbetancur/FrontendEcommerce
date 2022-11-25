import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusquedaRoutingModule } from './busqueda-routing.module';
import { ProductosComponent } from './productos/productos.component';
import { ProductosxcategoriasComponent } from './productosxcategorias/productosxcategorias.component';


@NgModule({
  declarations: [
    ProductosComponent,
    ProductosxcategoriasComponent
  ],
  imports: [
    CommonModule,
    BusquedaRoutingModule
  ]
})
export class BusquedaModule { }
