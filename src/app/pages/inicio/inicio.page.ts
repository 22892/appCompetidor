import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';
import { DatosService } from './../../services/datos.service'
import { Router } from '@angular/router';
import { Competidor } from 'src/app/components/model/competidor';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {


  listCompetidor: any[] = []


  constructor(private serviceData: DatosService,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private router: Router,) {

  }

  ngOnInit() {
  }

  ionViewWillEnter(){

    console.log('hhhhhhhhh');
    console.log(this.serviceData.getCredentials());
    

    if(this.serviceData.getCredentials()){

      this.getListCompetidor()
    }else{

      this.router.navigate(['/login']);
    }
    
  }



  async getListCompetidor(){
    const loading = await this.loadingCtrl.create({
      message: 'Recuperando....',
    });
    loading.present();

    this.serviceData.getAllListCompetidor().subscribe((data) => {
      loading.dismiss();
      this.listCompetidor = data;
      console.log(this.listCompetidor);
      
    });
  }


  asistenciaCompetencia(competidor: Competidor){
    competidor.asistio = true
    competidor.fecha_salida = Date.now()

    console.log('salidaaa');
    
    console.log(competidor);
    
    this.serviceData.updateCompetidor(competidor)

  }

}
