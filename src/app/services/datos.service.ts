import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Competidor } from '../components/model/competidor';
import { Usuario } from '../components/model/usuario';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  competidorDoc: any
  constructor(private fireStore: AngularFirestore) { }

  getUser(usuario: string, pass: string): Observable<any> {
    const ref = this.fireStore.collection<Usuario>('administrador', ref => {
      return ref
        .where('pass', '==', pass)
        .where('usuario', '==', usuario)
        
    }
    ).valueChanges();
    return ref;
  }

  createCompetidor(competidor: Competidor) {
    this.competidorDoc = this.fireStore.doc<any>('competidores/' + competidor.id);
    this.competidorDoc.set(competidor)
  }

  getAllListCompetidor(): Observable<Competidor[]> {
    return this.fireStore.collection<Competidor>('competidores').valueChanges();
  }

  updateCompetidor(competidor: Competidor) {
    this.competidorDoc = this.fireStore.doc<any>('competidores/' + competidor.id);
    this.competidorDoc.update(competidor)
  }

  deleteCompetidor(competidor: Competidor) {
    this.fireStore.doc<any>('competidores/' + competidor.id).delete();
  }

  getCompetidoresAsistio(): Observable<any> {
    const ref = this.fireStore.collection<Competidor>('competidores', ref => {
      return ref.where('asistio', '==', true)
    }
    ).valueChanges();
    return ref;
  }

  getCompetidoresResultado(): Observable<any> {
    const ref = this.fireStore.collection<Competidor>('competidores', ref => {
      return ref.where('asistio', '==', true)
      .orderBy('hora', "asc")
      .orderBy('minuto', "asc")
      .orderBy('segundo', "asc")
    }
    ).valueChanges();
    return ref;
  }
}
