import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login-page',
    loadChildren: () => import('./login-page/login-page.module').then( m => m.LoginPagePageModule)
  },
  {
    path: 'testing',
    loadChildren: () => import('./testing/testing.module').then( m => m.TestingPageModule)
  },
  {
    path: 'add-trip',
    loadChildren: () => import('./add-trip/add-trip.module').then( m => m.AddTripPageModule)
  },
  {
    path: 'leave',
    loadChildren: () => import('./leave/leave.module').then( m => m.LeavePageModule)
  },
  {
    path: 'coworker-travel-details',
    loadChildren: () => import('./coworker-travel-details/coworker-travel-details.module').then( m => m.CoworkerTravelDetailsPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'current-trip',
    loadChildren: () => import('./current-trip/current-trip.module').then( m => m.CurrentTripPageModule)
  },
  {
    path: 'travel-details',
    loadChildren: () => import('./travel-details/travel-details.module').then( m => m.TravelDetailsPageModule)
  },
  {
    path: 'travel-expense-download',
    loadChildren: () => import('./travel-expense-download/travel-expense-download.module').then( m => m.TravelExpenseDownloadPageModule)
  },
  {
    path: 'travel-detail-data',
    loadChildren: () => import('./travel-detail-data/travel-detail-data.module').then( m => m.TravelDetailDataPageModule)
  },
  {
    path: 'month-expense-data',
    loadChildren: () => import('./month-expense-data/month-expense-data.module').then( m => m.MonthExpenseDataPageModule)
  },
  {
    path: 'leave-help',
    loadChildren: () => import('./leave-help/leave-help.module').then( m => m.LeaveHelpPageModule)
  },
  {
    path: 'help-support',
    loadChildren: () => import('./help-support/help-support.module').then( m => m.HelpSupportPageModule)
  },
  {
    path: 'current-trip-help-support',
    loadChildren: () => import('./current-trip-help-support/current-trip-help-support.module').then( m => m.CurrentTripHelpSupportPageModule)
  },
  {
    path: 'travel-details-help',
    loadChildren: () => import('./travel-details-help/travel-details-help.module').then( m => m.TravelDetailsHelpPageModule)
  },
  {
    path: 'travel-expense-help',
    loadChildren: () => import('./travel-expense-help/travel-expense-help.module').then( m => m.TravelExpenseHelpPageModule)
  },
  {
    path: 'coworker-help',
    loadChildren: () => import('./coworker-help/coworker-help.module').then( m => m.CoworkerHelpPageModule)
  },
  {
    path: 'leave-details',
    loadChildren: () => import('./leave-details/leave-details.module').then( m => m.LeaveDetailsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
