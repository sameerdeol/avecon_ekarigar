import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelpSupportPageRoutingModule } from './help-support-routing.module';

import { HelpSupportPage } from './help-support.page';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelpSupportPageRoutingModule,
    SharedmoduleModule
  ],
  declarations: [HelpSupportPage]
})
export class HelpSupportPageModule {}
