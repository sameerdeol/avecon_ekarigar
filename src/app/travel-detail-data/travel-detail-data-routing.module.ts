import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TravelDetailDataPage } from './travel-detail-data.page';

const routes: Routes = [
  {
    path: '',
    component: TravelDetailDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TravelDetailDataPageRoutingModule {}
