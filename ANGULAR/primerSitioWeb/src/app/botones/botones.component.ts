import { Component } from '@angular/core';
//Importar el componente Button
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-botones',
  imports: [MatButtonModule,MatIconModule],
  templateUrl: './botones.component.html',
  styleUrl: './botones.component.css'
})
export class BotonesComponent {

}
