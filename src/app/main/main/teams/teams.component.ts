import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateTeamComponent } from './create-team/create-team.component';
import { TeamsService } from 'src/app/services/teams/teams.service';
import { Subscription } from 'rxjs';
import { Team } from 'src/app/data-models/team';
import { DeleteTeamComponent } from './delete-team/delete-team.component';
import { AlertComponent } from 'src/app/shared-components/alert/alert.component';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent implements OnInit, OnDestroy {
  constructor(public dialog: MatDialog, public teamsService: TeamsService) {}

  userLoggedIn = JSON.parse(localStorage.getItem('UserLoggedIn') || '{}');
  teams: Team[] = this.teamsService.teams;
  myTeam: Team[] = [];
  private getSub: Subscription = new Subscription();

  ngOnInit(): void {
    // this.getSub = this.teamsService.getTeams().subscribe((data) => {
    //   this.teams = data;
    //   for (let team of this.teams) {
    //     if (team.creatorId === this.userLoggedIn.id) {
    //       team.isAdmin = true;
    //       this.myTeam = this.teams.filter(
    //         (t) => t.creatorId == this.userLoggedIn.id
    //       );
    //       this.teams = this.teams.filter(
    //         (t) => t.creatorId !== this.userLoggedIn.id
    //       );
    //       this.teams.push(this.myTeam[0]);
    //       this.teams.reverse();
    //     }
    //   }
    // });
    for (let team of this.teams) {
      if (team.creatorEmail === this.userLoggedIn.email) {
        team.isAdmin = true;
      } else {
        team.isAdmin = false;
      }
    }
  }

  ngOnDestroy(): void {
    this.getSub.unsubscribe();
  }

  openEditTeamPanel(): void {
    this.dialog.open(CreateTeamComponent, {
      panelClass: 'createTeamContainer',
    });
    this.teamsService.panel = 'Edit';
  }

  openDeleteTeamPanel(): void {
    this.dialog.open(DeleteTeamComponent, {
      panelClass: 'deleteTeamContainer',
    });
  }
  openCreateTeamPanel(): void {
    for (let team of this.teams) {
      if (team.creatorEmail === this.userLoggedIn.email) {
        this.dialog.open(AlertComponent, {
          panelClass: 'alert',
        });
        return;
      }
    }

    this.dialog.open(CreateTeamComponent, {
      panelClass: 'createTeamContainer',
    });
    this.teamsService.panel = 'Create';
  }
}
