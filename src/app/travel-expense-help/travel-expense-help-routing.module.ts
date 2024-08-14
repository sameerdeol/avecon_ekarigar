import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TravelExpenseHelpPage } from './travel-expense-help.page';

const routes: Routes = [
  {
    path: '',
    component: TravelExpenseHelpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TravelExpenseHelpPageRoutingModule {}
