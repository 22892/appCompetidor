import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component: HomePage, children:[ {
    path: 'registro',
    loadChildren: () => import('../../pages/registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('../../pages/inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: 'llegada',
    loadChildren: () => import('../../pages/llegada/llegada.module').then(m => m.LlegadaPageModule)
  },
  {
    path: 'premio',
    loadChildren: () => import('../../pages/premiacion/premiacion.module').then(m => m.PremiacionPageModule)
  }]},

];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
