import { Component } from '@angular/core';
//IMPORTACION DEL MODULO CARDS
import {MatCardModule} from '@angular/material/card';
//Importacion del modulo botones
import { MatButtonModule } from '@angular/material/button';
//Importar el Modulo con Common
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards',
  imports: [MatCardModule,MatButtonModule,CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
//datos locales para los cardsViews

datos=[
  {
    nombre:'Producto1',
    precio:150,
    descripcion:'Descriocion producto 1',
    imagen:'https://www.viaxesports.com/wp-content/uploads/2023/04/GALAXY-A54-black.jpg'
  },
  {
    nombre:'Producto2',
    precio:200,
    descripcion:'Descripcion producto 2',
    imagen:'https://www.condorinformatica.uy/imgs/productos/productos33_14609.png'
  },
  {
    nombre:'Producto1',
    precio:150,
    descripcion:'Descriocion producto 1',
    imagen:'https://www.viaxesports.com/wp-content/uploads/2023/04/GALAXY-A54-black.jpg'
  },
  {
    nombre:'Producto2',
    precio:200,
    descripcion:'Descripcion producto 2',
    imagen:'https://www.condorinformatica.uy/imgs/productos/productos33_14609.png'
  },
  {
    nombre:'Producto1',
    precio:150,
    descripcion:'Descriocion producto 1',
    imagen:'https://www.viaxesports.com/wp-content/uploads/2023/04/GALAXY-A54-black.jpg'
  },
  {
    nombre:'Producto2',
    precio:200,
    descripcion:'Descripcion producto 2',
    imagen:'https://www.condorinformatica.uy/imgs/productos/productos33_14609.png'
  },
  {
    nombre:'Producto1',
    precio:150,
    descripcion:'Descriocion producto 1',
    imagen:'https://www.viaxesports.com/wp-content/uploads/2023/04/GALAXY-A54-black.jpg'
  },
  {
    nombre:'Producto2',
    precio:200,
    descripcion:'Descripcion producto 2',
    imagen:'https://www.condorinformatica.uy/imgs/productos/productos33_14609.png'
  },
  {
    nombre:'Producto1',
    precio:150,
    descripcion:'Descriocion producto 1',
    imagen:'https://www.viaxesports.com/wp-content/uploads/2023/04/GALAXY-A54-black.jpg'
  },
  {
    nombre:'Producto2',
    precio:200,
    descripcion:'Descripcion producto 2',
    imagen:'https://www.condorinformatica.uy/imgs/productos/productos33_14609.png'
  }
]

//variables de los datos

}
