import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeavePageRoutingModule } from './leave-routing.module';

import { LeavePage } from './leave.page';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeavePageRoutingModule,
    SharedmoduleModule
  ],
  declarations: [LeavePage]
})
export class LeavePageModule {}
