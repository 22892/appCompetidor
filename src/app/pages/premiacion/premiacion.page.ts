import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DatosService } from './../../services/datos.service'
import { Competidor } from 'src/app/components/model/competidor';


@Component({
  selector: 'app-premiacion',
  templateUrl: './premiacion.page.html',
  styleUrls: ['./premiacion.page.scss'],
})
export class PremiacionPage implements OnInit {

  listCompetidor: Competidor[] = []


  constructor( private serviceData: DatosService,
    private loadingCtrl: LoadingController,
    private router: Router,) { }

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

    this.serviceData.getCompetidoresResultado().subscribe((data) => {
      loading.dismiss();
      this.listCompetidor = data;
      
      console.log(this.listCompetidor);
      
    });
  }


}
