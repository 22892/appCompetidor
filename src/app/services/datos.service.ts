import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  listConpetidor: any[] = [{codigo: 1, nombre: 'Carlos Alvarez', edad: 20, sexo: 'Masculino'}]

  constructor() { }


  getAllListCompetidor(){
    return this.listConpetidor
  }

  


}
