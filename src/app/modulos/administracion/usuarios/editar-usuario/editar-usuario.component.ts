import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit  {

  id: string = '';

  fgValidador: FormGroup = this.fb.group({
    'id':['', [Validators.required]],
    'contrasena':['', [Validators.required]],
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
    this.fgValidador.controls["contrasena"].setValue(datos.contrasena);
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

EditarUsuario(){
  let cedula = this.fgValidador.controls["cedula"].value;
  let nombre = this.fgValidador.controls["nombre"].value;
  let apellidos = this.fgValidador.controls["apellidos"].value;
  let correo = this.fgValidador.controls["correo"].value;
  let departamento = this.fgValidador.controls["departamento"].value;  
  let ciudad = this.fgValidador.controls["ciudad"].value;
  let direccion = this.fgValidador.controls["direccion"].value;
  let telefono = this.fgValidador.controls["telefono"].value;
  let rol = this.fgValidador.controls["rol"].value;  
  let contrasena = this.fgValidador.controls["contrasena"].value;  
  
  let u = new ModeloUsuario();
  u.id = this.id; 
  u.contrasena=contrasena;
  u.cedula=cedula;
  u.nombre=nombre;
  u.apellidos=apellidos;
  u.correo=correo;
  u.departamento=departamento;
  u.ciudad=ciudad;
  u.direccion=direccion;
  u.telefono=telefono;
  u.rol=rol;

  this.servicioUsuario.ActualizarUsuario(u).subscribe((datos:ModeloUsuario)=>{
    alert("Usuario actualizado correctamente");
    this.router.navigate(['/administracion/listar-usuarios']);

  },(error:any)=>{
    alert("Error actualizando el usuario: " + error.message)
  });

}


}
