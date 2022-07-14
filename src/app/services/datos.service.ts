import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Competidor } from '../components/model/competidor';
import { Usuario } from '../components/model/usuario';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  listConpetidor: any[] = [{codigo: 1, nombre: 'Carlos Alvarez', edad: 20, sexo: 'Masculino'}]

  constructor(private fireStore: AngularFirestore) { }


  getAllListCompetidor(){
    return this.listConpetidor
  }

  getUser (usuario:string, pass:string): Observable<any> {
    const ref= this.fireStore.collection<Usuario>('administrador',ref =>
    {

      return ref
              .where('pass', '==', pass)
              .where('usuario', '==', usuario)
      }
    ).valueChanges();
    return ref;
  }

  createCompetidor(competidor:Competidor){

  }

}
