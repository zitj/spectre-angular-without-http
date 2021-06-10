import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './main/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MainComponent } from './main/main.component';
import { MainGuard } from './main.guard';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatList, MatListModule } from '@angular/material/list';
import { MainRoutingModudle } from './main/main-routing.module';
import { TeamsComponent } from './main/teams/teams.component';
import { CreateTeamComponent } from './main/teams/create-team/create-team.component';
import { DeleteTeamComponent } from './main/teams/delete-team/delete-team.component';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    TeamsComponent,
    CreateTeamComponent,
    DeleteTeamComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatListModule,
    MainRoutingModudle,
  ],
})
export class MainModule {}
