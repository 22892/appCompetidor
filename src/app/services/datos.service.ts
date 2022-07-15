import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Competidor } from '../components/model/competidor';
import { Usuario } from '../components/model/usuario';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class DatosService {

  competidorDoc: any
  user: any

  constructor(private fireStore: AngularFirestore,
    private router: Router,) { }


  // getAllListCompetidor(){
  //   return this.listConpetidor
  // }

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


  setCredentials(credentials:any){   
    
    localStorage.setItem("usuario",JSON.stringify(credentials[0])); 
  }

  logout(){
    localStorage.removeItem("usuario");
    this.router.navigate(['/login']);
  }

  getCredentials(){
    let usuario = localStorage.getItem("usuario");
    
    if(!usuario){
      this.user = undefined;
      
    }else{
      this.user = JSON.parse(usuario);
      
    }
    return this.user
  }


  setIdPersona(id: any){


    if(id == 0){
      localStorage.setItem('idPerson', '1');
      
    }else{

      console.log('noooo');
      var idPerson = localStorage.getItem('idPerson')
      if(idPerson == null){

      }else{

        console.log('aumenta');
        var aux = parseInt(idPerson) + 1
        localStorage.setItem('idPerson', aux.toString());
      }
    }

   
  }


  getIdPerson(){

    var resulatdo: any
    var idPerson = localStorage.getItem('idPerson')

    console.log('getttttttttttttt');
    console.log(idPerson);
    console.log(parseInt(idPerson));

    if(idPerson == null){
      localStorage.setItem('idPerson', '1');
      resulatdo = 1
    }else{
      resulatdo = parseInt(idPerson)
    }
    return resulatdo
  }





}
