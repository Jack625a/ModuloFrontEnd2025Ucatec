import { Component,inject } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogModule,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from'@angular/material/dialog';

//Importar el contenido de la pantalla emergente o alerta
import { ContenidoAlertaComponent } from '../contenido-alerta/contenido-alerta.component';



@Component({
  selector: 'app-dialogo',
  imports: [MatButtonModule,ContenidoAlertaComponent],
  templateUrl: './dialogo.component.html',
  styleUrl: './dialogo.component.css'
})
export class DialogoComponent {
  readonly alerta=inject(MatDialog);
  //Metodo de la clase
  mostrarAlerta(enterAnimationDuration: string,exitAnimationDuration:string):void{
    this.alerta.open(ContenidoAlertaComponent,{
      width:'300px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

}
