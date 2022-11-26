import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {


  fgValidador: FormGroup = this.fb.group({
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
    private router: Router){

  }
  
  ngOnInit():void {}


  GuardarUsuario(){
    let cedula = this.fgValidador.controls["cedula"].value;
    let nombre = this.fgValidador.controls["nombre"].value;
    let apellidos = this.fgValidador.controls["apellidos"].value;
    let correo = this.fgValidador.controls["correo"].value;
    let departamento = this.fgValidador.controls["departamento"].value;
    let ciudad = this.fgValidador.controls["ciudad"].value;
    let direccion = this.fgValidador.controls["direccion"].value;
    let telefono = this.fgValidador.controls["telefono"].value;
    let rol = this.fgValidador.controls["rol"].value;    
    let u = new ModeloUsuario();
    u.cedula = cedula;
    u.nombre = nombre;
    u.apellidos = apellidos;
    u.correo = correo;
    u.departamento = departamento;
    u.ciudad = ciudad;
    u.direccion = direccion;
    u.telefono = telefono;
    u.rol = rol;
    
    this.servicioUsuario.CrearUsuario(u).subscribe((datos:ModeloUsuario)=>{
      alert("Usuario almancenado correctamente");
      this.router.navigate(['/administracion/listar-usuarios']);

    },(error:any)=>{
      alert("Error guardando Usuario: " + error.message)
    });

  }

  
}
