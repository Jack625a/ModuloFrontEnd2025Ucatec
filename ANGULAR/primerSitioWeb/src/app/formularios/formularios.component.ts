import { Component } from '@angular/core';
//Importar los formularios
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-formularios',
  imports: [ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule
  ],
  templateUrl: './formularios.component.html',
  styleUrl: './formularios.component.css'
})
export class FormulariosComponent {

  primerFormulario: FormGroup;
  //Definir el constructor 
  constructor(private _formBuilder:FormBuilder){
  //Definir el formulario(Informacion de solictud)
  this.primerFormulario=this._formBuilder.group({
    nombre:['',Validators.required],
    edad:['',Validators.required]
  });
  }
  //Metodo para enviar el formulario
  enviardDatos():void{
    if(this.primerFormulario.valid){
      const datosFormulario={
        ...this.primerFormulario
      };
      console.log(datosFormulario);
      //Enviar a la base de datos
    }
  }
}
