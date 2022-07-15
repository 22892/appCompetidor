import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatosService } from 'src/app/services/datos.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  registroForm: FormGroup;
  @Input() competidor: any;

  optionSexo: any[] = [{sex_codigo: 1, sex_descripcion: 'Masculino'}, {sex_codigo: 2, sex_descripcion: 'Femenino'}]


  constructor(private modalController: ModalController,
    private fb: FormBuilder,
    private toastCtrl: ToastController,
    private serviceData: DatosService) {
      this.registroForm = this.fb.group({

        nombre: [null, [Validators.required]],
        edad: [null, [Validators.required]],
        sexo: [null, [Validators.required]],
  
      });
  
  }

  ngOnInit() {
    console.log('com');
    console.log(this.competidor);

    this.registroForm.setValue({
      nombre: this.competidor.nombre,
      edad: this.competidor.edad,
      sexo: this.competidor.sexo,
     
    })
    
  }

  async editarCompetidor(){

    // console.log(this.competidor);

    const valida = this.validateForms()

    if(valida){
      

       this.competidor.nombre = this.registroForm.get('nombre')!.value
       let sexo = this.registroForm.get('sexo')!.value
       this.competidor.edad = this.registroForm.get('edad')!.value
       this.competidor.sexo = sexo.sex_descripcion

       console.log('ejecuta editar');
       console.log(this.competidor);
       
      this.serviceData.updateCompetidor(this.competidor);
      return this.modalController.dismiss();

      
    }else{
      let toast = await this.toastCtrl.create({
        message: 'Complete todo los campos requeridos',
        duration: 2000,
        position: 'top'
      });

      return await toast.present()

    }
    

  }

  dismiss() {
    return this.modalController.dismiss();
  }

  cancelar(){
    return this.modalController.dismiss();
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
      this.submitForm()
      return false;
    }

    return v;
  }


}
