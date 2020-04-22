import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PpsBPageRoutingModule } from './pps-b-routing.module';

import { PpsBPage } from './pps-b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PpsBPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PpsBPage]
})
export class PpsBPageModule {}
