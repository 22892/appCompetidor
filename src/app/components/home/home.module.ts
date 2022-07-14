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
  },]},

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
