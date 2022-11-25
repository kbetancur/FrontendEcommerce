import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarCategoriaComponent } from './categorias/buscar-categoria/buscar-categoria.component';
import { CrearCategoriaComponent } from './categorias/crear-categoria/crear-categoria.component';
import { EditarCategoriaComponent } from './categorias/editar-categoria/editar-categoria.component';
import { EliminarCategoriaComponent } from './categorias/eliminar-categoria/eliminar-categoria.component';
import { BuscarProductoComponent } from './productos/buscar-producto/buscar-producto.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';
import { EliminarProductoComponent } from './productos/eliminar-producto/eliminar-producto.component';
import { BuscarProductoxcategoriaComponent } from './productosxcategorias/buscar-productoxcategoria/buscar-productoxcategoria.component';
import { CrearProductoxcategoriaComponent } from './productosxcategorias/crear-productoxcategoria/crear-productoxcategoria.component';
import { EditarProductoxcategoriaComponent } from './productosxcategorias/editar-productoxcategoria/editar-productoxcategoria.component';
import { EliminarProductoxcategoriaComponent } from './productosxcategorias/eliminar-productoxcategoria/eliminar-productoxcategoria.component';
import { BuscarUsuarioComponent } from './usuarios/buscar-usuario/buscar-usuario.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuarios/eliminar-usuario/eliminar-usuario.component';

const routes: Routes = [
  {
    path: "crear-usuario",
    component: CrearUsuarioComponent
  },
  {
    path:"listar-productos",
    component:BuscarProductoComponent
  },
  {
    path: "buscar-usuario",
    component:BuscarUsuarioComponent
  },
  
  {
    path:"editar-usuario",
    component:EditarUsuarioComponent
  },
  {
    path:"eliminar-usuario",
    component:EliminarUsuarioComponent
  },
  {
    path:"crear-producto",
    component:CrearProductoComponent
  },
  {
    path:"buscar-producto",
    component:BuscarProductoComponent
  },
  {
    path:"editar-producto/:id",
    component:EditarProductoComponent
  },
  {
    path:"eliminar-producto/:id",
    component:EliminarProductoComponent
  },
  {
    path:"crear-categoria",
    component:CrearCategoriaComponent
  },
  {
    path:"buscar-categoria",
    component:BuscarCategoriaComponent
  },
  {
    path:"editar-categoria",
    component:EditarCategoriaComponent
  },
  {
    path:"eliminar-categoria",
    component:EliminarCategoriaComponent
  },
  {
    path:"crear-productoxcategoria",
    component:CrearProductoxcategoriaComponent
  },
  {
    path:"buscar-productoxcategoria",
    component:BuscarProductoxcategoriaComponent
  },
  {
    path:"editar-productoxcategoria",
    component:EditarProductoxcategoriaComponent
  },
  {
    path:"eliminar-productoxcategoria",
    component:EliminarProductoxcategoriaComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
