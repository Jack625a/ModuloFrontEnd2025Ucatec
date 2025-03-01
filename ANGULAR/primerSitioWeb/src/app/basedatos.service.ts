import { Injectable } from '@angular/core';
//Paso 1 .Importar Airtable
import Airtable from 'airtable';
//pASO 2 Importar la conexion para solicitud servicio y angular
import { Observable, from } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BasedatosService {
  //Paso 3 Crear la variable de conexion
  private base:any;
  constructor() { 
    //Paso 4. Configurar la conexion a Airtable
    Airtable.configure({
      endpointUrl:'https://api.airtable.com',
      apiKey:''
    });
    //Paso 5. COnfigurar el id de la base de datos
    this.base=Airtable.base('');
  }
  //Paso 6. Crear el metodo para obtner datos
  obtenerDatos():
  Observable<any[]>{
    return from(new Promise<any[]>((resolve,reject)=>{
      const registros:any[]=[];
      this.base('Productos').select({
        view:'Grid view'
      }).eachPage(
        function page(records:any[],siguiente:()=>void){
          //Agregar los registros obtenidos a la lista registros
          records.forEach(registro=>{
            registros.push({
              id:registro.id,
              nombre:registro.get('nombre'),
              precio:registro.get('precio'),
              descripcion:registro.get('descripcion'),
              imagen:registro.get('imagen')
            });
          });
          siguiente();
        },
        function salir(error:any){
          if(error){
            reject(error);
          }else{
            resolve(registros);
          }
        }
      );
    }));
  }
}
