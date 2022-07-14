import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PremiacionPage } from './premiacion.page';

const routes: Routes = [
  {
    path: '',
    component: PremiacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PremiacionPageRoutingModule {}
