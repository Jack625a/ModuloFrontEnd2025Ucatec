import { Component,inject } from '@angular/core';
//Importacion del modulo de tabs
import {MatTabsModule} from '@angular/material/tabs';
//Importacion del contenido de botones
import { BotonesComponent } from '../botones/botones.component';
//Importacion de modulo de iconos
import {MatIconModule} from '@angular/material/icon';
//Importacion del modulo de bottonsheet
import {MatBottomSheetModule, MatBottomSheet,MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
//Importar el contenido de la pantalla emergente
import { ContenidoPantallaInferiorComponent } from '../contenido-pantalla-inferior/contenido-pantalla-inferior.component';
//Importar el contenido de los cards
import { CardsComponent } from '../cards/cards.component';
//Importar el contenido del dialogo
import { DialogoComponent } from '../dialogo/dialogo.component';
//Importar el contenido de imputs
import { InputsComponent } from '../inputs/inputs.component';
//Importar el formulario reactivo
import { FormulariosComponent } from '../formularios/formularios.component';
//Importar el formulario de crearDatos
import { CrearDatosComponent } from '../crear-datos/crear-datos.component';


@Component({
  selector: 'app-navegacion',
  imports: [MatTabsModule,BotonesComponent,
    MatIconModule, MatBottomSheetModule,MatButtonModule,CardsComponent,
    DialogoComponent,
    InputsComponent,FormulariosComponent,
    CrearDatosComponent
  ],
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.css'
})
export class NavegacionComponent {
  private _bottomSheet=inject(MatBottomSheet)

  //Metodo de la clase
  mostrarPantalla():void{
    this._bottomSheet.open(ContenidoPantallaInferiorComponent)
  }
}
