import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatosService } from './../../services/datos.service'
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { AlertController } from '@ionic/angular';
import { Competidor } from 'src/app/components/model/competidor';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  @ViewChild(IonModal) modal: IonModal;

  registroForm: FormGroup;
  listCompetidor: Competidor[] = []
  // public listCompetidor: Observable<Competidor[]>;

  constructor(private fb: FormBuilder,
    private serviceData: DatosService,
    private alertController: AlertController) {

    this.registroForm = this.fb.group({

      nombre: [null, [Validators.required]],
      edad: [null, [Validators.required]],
      sexo: [null, [Validators.required]],

    });
  }

  ngOnInit() {

    this.serviceData.getAllListCompetidor().subscribe((data) => {
      this.listCompetidor = data;
      // console.log(this.listCompetidor)
    });
  }

  submitForm(): void {
    for (const key in this.registroForm.controls) {
      this.registroForm.controls[key].markAsDirty();
      this.registroForm.controls[key].updateValueAndValidity();
    }

  }

  validateForms(): boolean {
    let v = true;
    if (!this.registroForm.valid) {
      console.log('mensaje');
      return false;
    }

    return v;
  }


  cancel() {
    this.modal.dismiss(null, 'cancel');
  }


  confirm() {
    this.modal.dismiss('Texto', 'confirm');


    let persona = {
      nombre: this.registroForm.get('nombre')!.value,
      edad: this.registroForm.get('edad')!.value,
      sexo: this.registroForm.get('sexo')!.value
    }

    let competidor: Competidor = {
      nombre: this.registroForm.get('nombre')!.value,
      edad: this.registroForm.get('edad')!.value,
      sexo: this.registroForm.get('sexo')!.value,
      asistio: false,
      id: 1,
      fecha_salida: new Date,
      fecha_llegada: new Date,
      tiempo: new Date,

    }
    this.serviceData.createCompetidor(competidor)

  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      console.log('agregado');


    }
  }

  actualizarCompetidor() {

  }

  eliminarCompetidor() {

  }

  async verificaEliminar() {
    const alert = await this.alertController.create({
      header: 'Desea Eliminar',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'No',
          cssClass: 'alert-button-cancel',
        },
        {
          text: 'Yes',
          cssClass: 'alert-button-confirm',
          handler: () => {
            console.log('ok clicked');
          }
        }
      ]
    });

    await alert.present();
  }



}
