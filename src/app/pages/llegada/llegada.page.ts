import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';
import { DatosService } from './../../services/datos.service'
import { Router } from '@angular/router';
import { Competidor } from 'src/app/components/model/competidor';


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

  ionViewWillEnter() {


    if (this.serviceData.getCredentials()) {

      this.getListCompetidor()
    } else {

      this.router.navigate(['/login']);
    }

  }



  async getListCompetidor() {
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

  llegoMeta(competidor: Competidor) {
    competidor.fecha_llegada = new Date()
    // console.log('salida ' + competidor.fecha_salida.seconds)

    //console.log('salida ' + new Date(competidor.fecha_salida))
    //console.log('llegada ' + new Date(competidor.fecha_llegada))

    

    var tiempoPasado = competidor.fecha_llegada.getTime() - (competidor.fecha_salida);


    var segs = 1000;
    var mins = segs * 60;
    var hours = mins * 60;
    var days = hours * 24;
    var months = days * 30.416666666666668;
    var years = months * 12;

    var anos = Math.floor(tiempoPasado / years);

    tiempoPasado = tiempoPasado - (anos * years);
    var meses = Math.floor(tiempoPasado / months)

    tiempoPasado = tiempoPasado - (meses * months);
    var dias = Math.floor(tiempoPasado / days)

    tiempoPasado = tiempoPasado - (dias * days);

    

    var horas = Math.floor(tiempoPasado / hours)

    tiempoPasado = tiempoPasado - (horas * hours);
    var minutos = Math.floor(tiempoPasado / mins)

    tiempoPasado = tiempoPasado - (minutos * mins);
    var segundos = Math.floor(tiempoPasado / segs)

    competidor.hora=horas
    competidor.minuto = minutos
    competidor.segundo = segundos
    competidor.llegada = true


    console.log('llegada');
    console.log(competidor);
    

    this.serviceData.updateCompetidor(competidor)
  }


}
