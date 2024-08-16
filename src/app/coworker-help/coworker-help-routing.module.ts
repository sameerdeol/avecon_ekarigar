import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoworkerHelpPage } from './coworker-help.page';

const routes: Routes = [
  {
    path: '',
    component: CoworkerHelpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoworkerHelpPageRoutingModule {}
