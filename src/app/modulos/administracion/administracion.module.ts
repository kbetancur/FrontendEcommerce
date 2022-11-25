import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';

import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuarios/eliminar-usuario/eliminar-usuario.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { BuscarProductoComponent } from './productos/buscar-producto/buscar-producto.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';
import { EliminarProductoComponent } from './productos/eliminar-producto/eliminar-producto.component';
import { CrearCategoriaComponent } from './categorias/crear-categoria/crear-categoria.component';
import { EditarCategoriaComponent } from './categorias/editar-categoria/editar-categoria.component';
import { BuscarCategoriaComponent } from './categorias/buscar-categoria/buscar-categoria.component';
import { EliminarCategoriaComponent } from './categorias/eliminar-categoria/eliminar-categoria.component';
import { CrearProductoxcategoriaComponent } from './productosxcategorias/crear-productoxcategoria/crear-productoxcategoria.component';
import { EditarProductoxcategoriaComponent } from './productosxcategorias/editar-productoxcategoria/editar-productoxcategoria.component';
import { BuscarProductoxcategoriaComponent } from './productosxcategorias/buscar-productoxcategoria/buscar-productoxcategoria.component';
import { EliminarProductoxcategoriaComponent } from './productosxcategorias/eliminar-productoxcategoria/eliminar-productoxcategoria.component';


@NgModule({
  declarations: [
   
    EditarUsuarioComponent,
    EliminarUsuarioComponent,
    CrearProductoComponent,
    BuscarProductoComponent,
    EditarProductoComponent,
    EliminarProductoComponent,
    CrearCategoriaComponent,
    EditarCategoriaComponent,
    BuscarCategoriaComponent,
    EliminarCategoriaComponent,
    CrearProductoxcategoriaComponent,
    EditarProductoxcategoriaComponent,
    BuscarProductoxcategoriaComponent,
    EliminarProductoxcategoriaComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
