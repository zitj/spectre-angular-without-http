import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../app/auth/auth.guard';
import { MainGuard } from '../app/main/main.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((a) => a.AuthModule),
    canLoad: [AuthGuard],
  },
  {
    path: '/main',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
    canLoad: [MainGuard],
  },
  {
    path: '**',
    loadChildren: () => import('./auth/auth.module').then((a) => a.AuthModule),
    canLoad: [AuthGuard],
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
