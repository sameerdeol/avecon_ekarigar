import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangePasswordPageRoutingModule } from './change-password-routing.module';

import { ChangePasswordPage } from './change-password.page';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangePasswordPageRoutingModule,
    SharedmoduleModule
  ],
  declarations: [ChangePasswordPage]
})
export class ChangePasswordPageModule {}
