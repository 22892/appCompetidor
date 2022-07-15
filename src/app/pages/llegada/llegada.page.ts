import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';
import { DatosService } from './../../services/datos.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-llegada',
  templateUrl: './llegada.page.html',
  styleUrls: ['./llegada.page.scss'],
})
export class LlegadaPage implements OnInit {

  listCompetidor: any[] = []


  constructor(private serviceData: DatosService,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private router: Router,) {

  }

  ngOnInit() {

  }

  ionViewWillEnter(){


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

  llegoMeta(competidor: any){
    
  }


}
