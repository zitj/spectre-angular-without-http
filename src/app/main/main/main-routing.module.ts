import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';
import { MainComponent } from '../main/main.component';
import { MainGuard } from '../main.guard';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes = [
  {
    path: '',
    component: MainComponent,
    canLoad: [MainGuard],
    children: [
      {
        path: 'teams',
        component: TeamsComponent,
      },
      {
        path: 'dashboards',
        component: DashboardsComponent,
      },
      {
        path: 'statistics',
        component: StatisticsComponent,
      },
    ],
  },

  {
    path: '**',
    redirectTo: '/teams',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModudle {}
