import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrentTripPageRoutingModule } from './current-trip-routing.module';

import { CurrentTripPage } from './current-trip.page';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrentTripPageRoutingModule,
    SharedmoduleModule
  ],
  declarations: [CurrentTripPage]
})
export class CurrentTripPageModule {}
