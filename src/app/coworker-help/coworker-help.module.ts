import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoworkerHelpPageRoutingModule } from './coworker-help-routing.module';

import { CoworkerHelpPage } from './coworker-help.page';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoworkerHelpPageRoutingModule,
    SharedmoduleModule
  ],
  declarations: [CoworkerHelpPage]
})
export class CoworkerHelpPageModule {}
