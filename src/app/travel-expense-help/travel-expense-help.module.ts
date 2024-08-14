import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TravelExpenseHelpPageRoutingModule } from './travel-expense-help-routing.module';

import { TravelExpenseHelpPage } from './travel-expense-help.page';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TravelExpenseHelpPageRoutingModule,
    SharedmoduleModule
  ],
  declarations: [TravelExpenseHelpPage]
})
export class TravelExpenseHelpPageModule {}
