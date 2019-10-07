import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';

const routes: Routes = [
  // { path: 'dashboard', redirectTo: '/', pathMatch: 'full' },
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'board/:id',
        loadChildren: () => import('./board-detail/board-detail.module').then(m => m.BoardDetailModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
