import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';
import { MainComponent } from '../main/main.component';
import { MainGuard } from '../main.guard';

const routes = [
  {
    path: '/main',
    component: MainComponent,
    canLoad: [MainGuard],
    children: [
      {
        path: 'teams',
        component: TeamsComponent,
      },
      {
        path: 'dashboards',
      },
      {
        path: 'statistics',
      },
    ],
  },

  {
    path: '**',
    redirectTo: '/main/teams',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModudle {}
