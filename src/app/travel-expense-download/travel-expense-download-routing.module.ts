import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TravelExpenseDownloadPage } from './travel-expense-download.page';

const routes: Routes = [
  {
    path: '',
    component: TravelExpenseDownloadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TravelExpenseDownloadPageRoutingModule {}
