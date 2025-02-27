import { Component } from '@angular/core';
//importacion imputs
import {MatInputModule} from '@angular/material/input';
//Importacion formularios
import {MatFormFieldModule} from '@angular/material/form-field';
//Importar modulo iconos
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-inputs',
  imports: [MatInputModule,
    MatFormFieldModule,
    MatIconModule
  ],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.css'
})
export class InputsComponent {

}
