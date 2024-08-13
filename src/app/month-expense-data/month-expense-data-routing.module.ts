import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonthExpenseDataPage } from './month-expense-data.page';

const routes: Routes = [
  {
    path: '',
    component: MonthExpenseDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonthExpenseDataPageRoutingModule {}
