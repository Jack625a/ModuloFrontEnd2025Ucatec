import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { FormBuilder,FormGroup,ReactiveFormsModule,Validators } from '@angular/forms';
//Importar el servicio a la conexion con la base de datos
import { BasedatosService } from '../basedatos.service';
import {MatSnackBarModule, MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-crear-datos',
  imports: [
    MatButtonModule,
    CommonModule,
    MatStepperModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  templateUrl: './crear-datos.component.html',
  styleUrl: './crear-datos.component.css'
})
export class CrearDatosComponent {
  datosFormulario:FormGroup;
  datosFormulario2:FormGroup;
  datosFormulario3:FormGroup;

  //Definicion dle constructor
  constructor(
    private _formBuilder:FormBuilder,
    private airtableService:BasedatosService,
    private _snackBar:MatSnackBar,
  ){
    //Creacion de los pasos . Formulario 1(Nombre precio)
    this.datosFormulario=this._formBuilder.group({
      nombre:['',Validators.required],
      precio:['',Validators.required]
    });

    //segundo formulario
    this.datosFormulario2=this._formBuilder.group({
      descripcion:['',Validators.required]
    });
    //Tercer Fomulario
    this.datosFormulario3=this._formBuilder.group({
      imagen:['',Validators.required]
    });
  }
  //Metodo para enviar el formulario
  enviarFormulario():void{
    //Verificar si el formulario esta validado
    if(this.datosFormulario.valid && this.datosFormulario2.valid && this.datosFormulario3.valid){
      const datosEnvioFormulario={
        ...this.datosFormulario.value,
        ...this.datosFormulario2.value,
        ...this.datosFormulario3.value,
      };
      //Enviar los datos
      this.airtableService.añadirDatos(datosEnvioFormulario).subscribe(
        (respuesta)=>{
          console.log("Se registro correctamente los datos del formulario" , respuesta)
          this._snackBar.open("Producto registrado correctamente",'Cerrar',{
            duration:2000,
          });

          //Actualizar el formulario
          this.datosFormulario.reset();
          this.datosFormulario2.reset();
          this.datosFormulario3.reset();
        },
        (error)=>{
          console.error("Error al registrar los datos", error);
          this._snackBar.open('Error al registrar el producto','Cerrar',{
            duration:3000,
          });
        }
      );
    }else{
      this._snackBar.open("Debera completar todos los datos para registrar un producto nuevo",'Cerrar',{
        duration:3000,
      });
    }
  }

}
