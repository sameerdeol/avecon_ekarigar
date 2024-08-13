import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TravelDetailDataPageRoutingModule } from './travel-detail-data-routing.module';

import { TravelDetailDataPage } from './travel-detail-data.page';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TravelDetailDataPageRoutingModule,
    SharedmoduleModule
  ],
  declarations: [TravelDetailDataPage]
})
export class TravelDetailDataPageModule {}
