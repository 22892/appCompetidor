import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LlegadaPageRoutingModule } from './llegada-routing.module';

import { LlegadaPage } from './llegada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LlegadaPageRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [LlegadaPage]
})
export class LlegadaPageModule {}
