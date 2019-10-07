import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './pages/auth/auth.component';

import { AuthModule } from './pages/auth/auth.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';

import { AuthGuardService as AuthGuard } from './core/services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
  },
  { path: 'auth', component: AuthComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AuthModule, DashboardModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
