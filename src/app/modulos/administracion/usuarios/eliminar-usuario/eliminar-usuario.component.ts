import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-eliminar-usuario',
  templateUrl: './eliminar-usuario.component.html',
  styleUrls: ['./eliminar-usuario.component.css']
})
export class EliminarUsuarioComponent implements OnInit {


  id: string = '';

  fgValidador: FormGroup = this.fb.group({
    'id':['', [Validators.required]],
    'cedula':['', [Validators.required]],
    'nombre':['', [Validators.required]],
    'apellidos':['', [Validators.required]],
    'correo':['', [Validators.required]],
    'departamento':['', [Validators.required]],
    'ciudad':['', [Validators.required]],
    'direccion':['', [Validators.required]],
    'telefono':['', [Validators.required]],
    'rol':['', [Validators.required]],
  })

  constructor(private fb: FormBuilder, private servicioUsuario: UsuarioService,
    private router: Router, private route: ActivatedRoute){}

  ngOnInit():void {
    this.id = this.route.snapshot.params['id'];
    this.BuscarUsuario();
  }
  

  BuscarUsuario(){
    
    this.servicioUsuario.ObtenerRegistroPorId(this.id).subscribe((datos: ModeloUsuario)=>{
      
    this.fgValidador.controls["id"].setValue(this.id);
    this.fgValidador.controls["cedula"].setValue(datos.cedula);
    this.fgValidador.controls["nombre"].setValue(datos.nombre);
    this.fgValidador.controls["apellidos"].setValue(datos.apellidos);
    this.fgValidador.controls["correo"].setValue(datos.correo);
    this.fgValidador.controls["departamento"].setValue(datos.departamento);
    this.fgValidador.controls["ciudad"].setValue(datos.ciudad);
    this.fgValidador.controls["direccion"].setValue(datos.direccion);
    this.fgValidador.controls["telefono"].setValue(datos.telefono);
    this.fgValidador.controls["rol"].setValue(datos.rol);
  });
}

EliminarUsuario(){
  this.servicioUsuario.EliminarUsuario(this.id).subscribe((datos:ModeloUsuario)=>{
    alert("Usuario eliminado correctamente");
    this.router.navigate(['/administracion/listar-usuarios']);
  },(error:any)=>{
    alert("Error eliminando el Usuario: " + error.message)
  });  

}


}
