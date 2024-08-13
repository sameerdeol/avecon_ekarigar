import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TravelDetailsPageRoutingModule } from './travel-details-routing.module';

import { TravelDetailsPage } from './travel-details.page';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TravelDetailsPageRoutingModule,
    SharedmoduleModule
  ],
  declarations: [TravelDetailsPage]
})
export class TravelDetailsPageModule {}
