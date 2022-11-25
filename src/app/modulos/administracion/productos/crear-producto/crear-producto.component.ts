import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {


  fgValidador: FormGroup = this.fb.group({
    'nombre':['', [Validators.required]],
    'descripcion':['', [Validators.required]],
    'caracteristicas':['', [Validators.required]],
    'precio':['', [Validators.required]],
    'stock':['', [Validators.required]],
    'foto':['', [Validators.required]],
    'thumbnail':['', [Validators.required]],
  })
  constructor(private fb: FormBuilder, private servicioProducto: ProductoService,
    private router: Router){

  }

  ngOnInit():void {}


  GuardarProducto(){
    let nombre = this.fgValidador.controls["nombre"].value;
    let descripcion = this.fgValidador.controls["descripcion"].value;
    let caracteristicas = this.fgValidador.controls["caracteristicas"].value;
    let precio = parseInt(this.fgValidador.controls["precio"].value);
    let stock = parseInt(this.fgValidador.controls["stock"].value);
    let foto = this.fgValidador.controls["foto"].value;
    let thumbnail = this.fgValidador.controls["thumbnail"].value;
    let p = new ModeloProducto();
    p.nombre = nombre;
    p.descripcion = descripcion;
    p.caracteristicas = caracteristicas;
    p.precio = precio;
    p.stock = stock;
    p.foto = foto;
    p.thumbnail = thumbnail;


    this.servicioProducto.CrearProducto(p).subscribe((datos:ModeloProducto)=>{
      alert("Producto almancenado correctamente");
      this.router.navigate(['/administracion/listar-productos']);

    },(error:any)=>{
      alert("Error guardando producto: " + error.message)
    });

  }

}
