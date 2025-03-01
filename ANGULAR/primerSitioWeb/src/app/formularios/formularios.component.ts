import { Component } from '@angular/core';
//Importar los formularios
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

//Importacion del Stepper
import {MatStepperModule} from '@angular/material/stepper';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-formularios',
  imports: [ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatStepperModule,
    CommonModule
  ],
  templateUrl: './formularios.component.html',
  styleUrl: './formularios.component.css'
})
export class FormulariosComponent {

  primerFormulario: FormGroup;
  segundoFormulario:FormGroup;
  terceroFormulario:FormGroup;
  //Definir el constructor 
  constructor(private _formBuilder:FormBuilder){
  //Definir el formulario 1(Informacion de solictud)
  this.primerFormulario=this._formBuilder.group({
    nombre:['',Validators.required],
    edad:['',Validators.required]
  });
  //Definir el formulario 2 (correo, celular)
  this.segundoFormulario=this._formBuilder.group({
    correo:['',Validators.email],
    celular:['',Validators.required]
  });

  //Definir el formulario 3 (ci, contraseña)
  this.terceroFormulario=this._formBuilder.group({
    ci:['',Validators.required],
    contraseña:['',Validators.required]
  });
  }
  //Metodo para enviar el formulario
  enviardDatos():void{
    if(this.primerFormulario.valid){
      const datosFormulario={
        ...this.primerFormulario.value,
        ...this.segundoFormulario.value,
        ...this.terceroFormulario.value,
      };
      console.log(datosFormulario);
      //Enviar a la base de datos
    }
  }
}
