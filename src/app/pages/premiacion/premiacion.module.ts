import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PremiacionPageRoutingModule } from './premiacion-routing.module';

import { PremiacionPage } from './premiacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PremiacionPageRoutingModule
  ],
  declarations: [PremiacionPage]
})
export class PremiacionPageModule {}
