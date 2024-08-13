import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoworkerTravelDetailsPageRoutingModule } from './coworker-travel-details-routing.module';

import { CoworkerTravelDetailsPage } from './coworker-travel-details.page';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoworkerTravelDetailsPageRoutingModule,
    SharedmoduleModule
  ],
  declarations: [CoworkerTravelDetailsPage]
})
export class CoworkerTravelDetailsPageModule {}
