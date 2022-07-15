import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DatosService } from './../../services/datos.service'
import { Competidor } from 'src/app/components/model/competidor';


@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.scss'],
})
export class InformacionComponent implements OnInit {

  listCompetidor: Competidor[] = []


  constructor(private router: Router,
    private serviceData: DatosService,
    private loadingCtrl: LoadingController,) { }

  ngOnInit() {}

  returnLogin(){
    this.router.navigate(['/login']);

  }

  ionViewWillEnter(){

   

    this.getListCompetidor()
  
    
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
