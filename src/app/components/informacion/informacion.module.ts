import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InformacionComponent } from './informacion.component'

const routes: Routes = [
  { path: '', component: InformacionComponent },   
];


@NgModule({
  declarations: [InformacionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ]
})
export class InformacionModule { }
