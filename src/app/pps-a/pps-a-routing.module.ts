import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PpsAPage } from './pps-a.page';

const routes: Routes = [
  {
    path: '',
    component: PpsAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PpsAPageRoutingModule {}
