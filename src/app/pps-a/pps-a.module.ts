import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PpsAPageRoutingModule } from './pps-a-routing.module';

import { PpsAPage } from './pps-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PpsAPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PpsAPage]
})
export class PpsAPageModule {}
