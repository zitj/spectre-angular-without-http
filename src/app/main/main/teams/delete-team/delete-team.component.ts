import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TeamsService } from 'src/app/services/teams/teams.service';
import { Subscription } from 'rxjs';
import { Team } from 'src/app/data-models/team';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-delete-team',
  templateUrl: './delete-team.component.html',
  styleUrls: ['./delete-team.component.scss'],
})
export class DeleteTeamComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    public teamsService: TeamsService,
    private router: Router,
    private location: Location
  ) {}

  teams: Team[] = [];
  teamId: number = 90;
  teamName: string = '';

  userLoggedIn = JSON.parse(localStorage.getItem('UserLoggedIn') || '{}');

  ngOnInit(): void {
    for (let team of this.teams) {
      if (team.creatorEmail === this.userLoggedIn.email) {
        this.teamId = team.id;
        this.teamName = team.name;
      }
    }
  }

  deleteTeam(): void {
    for (var i = 0; i < this.teamsService.teams.length; i++) {
      if (this.teamsService.teams[i].creatorEmail === this.userLoggedIn.email) {
        this.teamsService.teams.splice(i, 1);
      }
    }
    this.dialog.closeAll();
  }
}
