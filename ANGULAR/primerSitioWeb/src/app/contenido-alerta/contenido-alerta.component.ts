import { Component,inject } from '@angular/core';
import {
  MatDialog,
  MatDialogModule,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from'@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-contenido-alerta',
  imports: [MatButtonModule,
    MatDialogActions,MatDialogClose,MatDialogContent,MatDialogTitle],
  templateUrl: './contenido-alerta.component.html',
  styleUrl: './contenido-alerta.component.css'
})
export class ContenidoAlertaComponent {
  readonly dialogoref=inject(MatDialogRef<ContenidoAlertaComponent>)

}
