import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LlegadaPage } from './llegada.page';

const routes: Routes = [
  {
    path: '',
    component: LlegadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LlegadaPageRoutingModule {}
