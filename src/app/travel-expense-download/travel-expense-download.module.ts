import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TravelExpenseDownloadPageRoutingModule } from './travel-expense-download-routing.module';

import { TravelExpenseDownloadPage } from './travel-expense-download.page';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TravelExpenseDownloadPageRoutingModule,
    SharedmoduleModule
  ],
  declarations: [TravelExpenseDownloadPage]
})
export class TravelExpenseDownloadPageModule {}
