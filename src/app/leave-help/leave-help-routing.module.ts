import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeaveHelpPage } from './leave-help.page';

const routes: Routes = [
  {
    path: '',
    component: LeaveHelpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeaveHelpPageRoutingModule {}
