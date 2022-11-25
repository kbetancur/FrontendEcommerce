import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';


@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {
  id: string = '';

  fgValidador: FormGroup = this.fb.group({
    'id':['', [Validators.required]],
    'nombre':['', [Validators.required]],
    'descripcion':['', [Validators.required]],
    'caracteristicas':['', [Validators.required]],
    'precio':['', [Validators.required]],
    'stock':['', [Validators.required]],
    'foto':['', [Validators.required]],
    'thumbnail':['', [Validators.required]],
  })

  constructor(private fb: FormBuilder, private servicioProducto: ProductoService,
    private router: Router, private route: ActivatedRoute){

  }

  ngOnInit():void {
    this.id = this.route.snapshot.params['id'];
    this.BuscarProducto();
  }

  BuscarProducto(){
    
      this.servicioProducto.ObtenerRegistroPorId(this.id).subscribe((datos: ModeloProducto)=>{
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["nombre"].setValue(datos.nombre);
      this.fgValidador.controls["descripcion"].setValue(datos.descripcion);
      this.fgValidador.controls["caracteristicas"].setValue(datos.caracteristicas);
      this.fgValidador.controls["precio"].setValue(datos.precio);
      this.fgValidador.controls["nombre"].setValue(datos.nombre);
      this.fgValidador.controls["stock"].setValue(datos.stock);
      this.fgValidador.controls["foto"].setValue(datos.foto);
      this.fgValidador.controls["thumbnail"].setValue(datos.thumbnail);
    });
  }


  EditarProducto(){
    let nombre = this.fgValidador.controls["nombre"].value;
    let descripcion = this.fgValidador.controls["descripcion"].value;
    let caracteristicas = this.fgValidador.controls["caracteristicas"].value;
    let precio = parseInt(this.fgValidador.controls["precio"].value);
    let stock = parseInt(this.fgValidador.controls["stock"].value);
    let foto = this.fgValidador.controls["foto"].value;
    let thumbnail = this.fgValidador.controls["thumbnail"].value;
    
    let p = new ModeloProducto();
    p.id=this.id;
    p.nombre = nombre;
    p.descripcion = descripcion;
    p.caracteristicas = caracteristicas;
    p.precio = precio;
    p.stock = stock;
    p.foto = foto;
    p.thumbnail = thumbnail;


    this.servicioProducto.ActualizarProducto(p).subscribe((datos:ModeloProducto)=>{
      alert("Producto actualizado correctamente");
      this.router.navigate(['/administracion/listar-productos']);

    },(error:any)=>{
      alert("Error actualizando el producto: " + error.message)
    });

  }

}
