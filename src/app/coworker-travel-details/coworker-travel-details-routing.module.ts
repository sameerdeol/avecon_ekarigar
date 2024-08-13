import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoworkerTravelDetailsPage } from './coworker-travel-details.page';

const routes: Routes = [
  {
    path: '',
    component: CoworkerTravelDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoworkerTravelDetailsPageRoutingModule {}
