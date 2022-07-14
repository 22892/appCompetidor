import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  user: any
  password: any
  userDoc: Usuario[]

  constructor(private fireStore: AngularFirestore) {
  }
  getAllPosts (): Observable<any> {
    const ref= this.fireStore.collection<Usuario>('administrador',ref =>
    {

      return ref
              .where('pass', '==', '2')
              .where('usuario', '==', '1')
      }
    ).valueChanges();
    return ref;
  }

  ngOnInit() {
    this.getAllPosts().subscribe((data)=>{
      this.userDoc = data;
      console.log(this.userDoc);
  });
  }

  login(){
    
  }

}
