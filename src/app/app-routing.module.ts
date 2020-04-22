import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home/:typeOfUser', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login',loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)},
  {
    path: 'pps-a/:typeOfUser',
    loadChildren: () => import('./pps-a/pps-a.module').then( m => m.PpsAPageModule)
  },
  {
    path: 'pps-b/:typeOfUser',
    loadChildren: () => import('./pps-b/pps-b.module').then( m => m.PpsBPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
