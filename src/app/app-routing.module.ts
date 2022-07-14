import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:'',loadChildren:() => import('./components/login/login.module').then(m => m.LoginModule)},
 
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then( m => m.LoginModule)
  },
  
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then( m => m.HomePageModule)
  },

  {
    path: 'info',
    loadChildren: () => import('./components/informacion/informacion.module').then( m => m.InformacionModule)
  },

 
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
