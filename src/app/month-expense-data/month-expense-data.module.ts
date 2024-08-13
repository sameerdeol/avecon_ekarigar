import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonthExpenseDataPageRoutingModule } from './month-expense-data-routing.module';

import { MonthExpenseDataPage } from './month-expense-data.page';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonthExpenseDataPageRoutingModule,
    SharedmoduleModule
  ],
  declarations: [MonthExpenseDataPage]
})
export class MonthExpenseDataPageModule {}
