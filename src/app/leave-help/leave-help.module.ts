import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeaveHelpPageRoutingModule } from './leave-help-routing.module';

import { LeaveHelpPage } from './leave-help.page';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeaveHelpPageRoutingModule,
    SharedmoduleModule
  ],
  declarations: [LeaveHelpPage]
})
export class LeaveHelpPageModule {}
