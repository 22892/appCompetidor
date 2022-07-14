import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Usuario } from '../model/usuario';
import { Router } from '@angular/router';
import { DatosService } from 'src/app/services/datos.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  user: any
  password: any
  userDoc: Usuario[]

  constructor(private router: Router,private serviceData: DatosService) {
  }
  
  ngOnInit() {
    
  }

  login(){
console.log(this.user+' - '+this.password);

    this.serviceData.getUser(this.user,this.password).subscribe((data)=>{
      this.userDoc = data;
      if(this.userDoc.length>0){
        this.router.navigate(['/home/registro']);
      }else{
        console.log('error de login');
        
      }
  });
  }

  mostrarInformacionGeneral(){
    this.router.navigate(['/info']);

  }

}
