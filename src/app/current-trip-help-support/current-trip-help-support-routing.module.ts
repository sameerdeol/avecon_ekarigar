import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrentTripHelpSupportPage } from './current-trip-help-support.page';

const routes: Routes = [
  {
    path: '',
    component: CurrentTripHelpSupportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrentTripHelpSupportPageRoutingModule {}
