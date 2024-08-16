import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TravelDetailsHelpPageRoutingModule } from './travel-details-help-routing.module';

import { TravelDetailsHelpPage } from './travel-details-help.page';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TravelDetailsHelpPageRoutingModule,
    SharedmoduleModule
  ],
  declarations: [TravelDetailsHelpPage]
})
export class TravelDetailsHelpPageModule {}
