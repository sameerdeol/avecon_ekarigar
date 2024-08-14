import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeaveDetailsPageRoutingModule } from './leave-details-routing.module';

import { LeaveDetailsPage } from './leave-details.page';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeaveDetailsPageRoutingModule,
    SharedmoduleModule
  ],
  declarations: [LeaveDetailsPage]
})
export class LeaveDetailsPageModule {}
