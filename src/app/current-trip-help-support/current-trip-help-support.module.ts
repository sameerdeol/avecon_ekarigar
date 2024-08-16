import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrentTripHelpSupportPageRoutingModule } from './current-trip-help-support-routing.module';

import { CurrentTripHelpSupportPage } from './current-trip-help-support.page';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrentTripHelpSupportPageRoutingModule,
    SharedmoduleModule
  ],
  declarations: [CurrentTripHelpSupportPage]
})
export class CurrentTripHelpSupportPageModule {}
