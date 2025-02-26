import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//Importar el componente HIjo
import { ImagenComponent } from './imagen/imagen.component';
import { BotonesComponent } from './botones/botones.component';
import { ListasComponent } from './listas/listas.component';
import { VideosComponent } from './videos/videos.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    MatToolbarModule,
    //ImagenComponent,
    //BotonesComponent,
    //ListasComponent,
    //VideosComponent,
    NavegacionComponent,
    MatButtonModule,
    MatIconModule  
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'primerSitioWeb';
}
