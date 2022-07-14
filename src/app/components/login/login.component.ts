import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Usuario } from '../model/usuario';
import { Router } from '@angular/router';
import { DatosService } from 'src/app/services/datos.service';
import { ToastController, LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  user: any
  password: any
  userDoc: Usuario[]

  constructor(private router: Router,
    private serviceData: DatosService,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController) {
  }
  
  ngOnInit() {
    
  }


  async login(){

    const loading = await this.loadingCtrl.create({
      message: 'Verificando....',
    
    });
    
    loading.present();

    
    if(this.user == undefined || this.user == "" || this.user == null && this.password == undefined || this.password == "" || this.password == null){

      loading.dismiss();

      let toast = await this.toastCtrl.create({
        message: 'Ingrese Usuario / Contraseña',
        duration: 2000,
        position: 'top'
      });

      return await toast.present()

    }else{

      this.serviceData.getUser(this.user,this.password).subscribe(async (data)=>{
        
        this.userDoc = data;
        if(this.userDoc.length>0){
          this.serviceData.setCredentials(this.userDoc)
          

          setTimeout(() => {
            this.router.navigate(['/home/registro']);
            loading.dismiss();
          }, 1000);
    

        }else{
  
          loading.dismiss();

          let toast = await this.toastCtrl.create({
            message: 'Error Usuario - Contraseña Incorrectos',
            duration: 2000,
            position: 'top'
          });
    
          return await toast.present()
  
          
        }
      });
  
    }
    
  }

  mostrarInformacionGeneral(){
    this.router.navigate(['/info']);

  }

}
