import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { TeamsService } from 'src/app/services/teams/teams.service';
import { Subscription } from 'rxjs';
import { User } from 'src/app/data-models/user';
import { Team } from 'src/app/data-models/team';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { UsersService } from 'src/app/services/users/users.service';
// import { CreateTeamSuccessComponent } from './create-team-success/create-team-success.component';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.scss'],
})
export class CreateTeamComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private router: Router,
    private location: Location,
    public teamsService: TeamsService,
    public usersService: UsersService
  ) {}

  users: Array<User> = this.usersService.users;
  teams: Array<Team> = this.teamsService.teams;

  filteredUsers: Array<User> = [];

  // private getUsers: Subscription = new Subscription();
  // private getTeams: Subscription = new Subscription();
  // private postSub: Subscription = new Subscription();
  // private updateSub: Subscription = new Subscription();

  userLoggedIn: User = JSON.parse(localStorage.getItem('UserLoggedIn') || '{}');
  formGroup: FormGroup = new FormGroup({});
  teamNameErrMsg: string = 'Team name is required';
  teamId: number = 99;
  heading: string = '';

  teamName: string = '';
  teamIndustry: string = '';

  ngOnInit(): void {
    this.heading = this.teamsService.panel;

    // this.getTeams = this.teamsService.getTeams().subscribe((data) => {
    //   this.teams = data;

    for (let team of this.teams) {
      if (team.creatorEmail === this.userLoggedIn.email) {
        this.teamId = team.id;
        this.teamName = team.name;
        this.teamIndustry = team.industry;
      }
    }

    // this.getUsers = this.usersService.getUsers().subscribe((data) => {
    //   this.users = data.filter((user) => user.id !== this.userLoggedIn.id);
    // });

    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      industry: ['', [Validators.required]],
      creatorEmail: this.userLoggedIn.email,
      members: [''],
      isAdmin: false,
    });
  }
  // ngOnDestroy(): void {
  //   this.postSub.unsubscribe();
  //   this.getUsers.unsubscribe();
  //   this.getTeams.unsubscribe();
  //   this.updateSub.unsubscribe();
  // }

  selectMembers(event: any): void {
    this.formGroup.patchValue({
      selectedMember: event.target.value,
    });
  }

  // refresh(): void {
  //   this.router
  //     .navigateByUrl('main', {
  //       skipLocationChange: true,
  //     })
  //     .then(() => {
  //       this.router.navigate([decodeURI(this.location.path())]);
  //     });
  // }

  onSubmit(): void {
    // if (this.teamsService.panel === 'Edit') {
    //   this.updateSub = this.teamsService
    //     .updateTeam(this.teamId, this.formGroup.value)
    //     .subscribe((data) => {
    //       this.dialog.closeAll();
    //       this.refresh();
    //     });
    // }
    if (this.teamsService.panel === 'Create') {
      // this.postSub = this.teamsService
      //   .createTeam(this.formGroup.value)
      //   .subscribe((data) => {
      //     this.dialog.open(CreateTeamSuccessComponent, {
      //       panelClass: 'createTeamSuccess',
      //     });
      //   });
      this.teamsService.teams.push(this.formGroup.value);
      this.dialog.closeAll();
      for (let team of this.teamsService.teams) {
        if (team.creatorEmail === this.userLoggedIn.email) {
          team.isAdmin = true;
        }
      }
      console.log(this.teamsService.teams);
    }

    if (this.teamsService.panel === 'Edit') {
      for (var i = 0; i < this.teamsService.teams.length; i++) {
        if (
          this.teamsService.teams[i].creatorEmail === this.userLoggedIn.email
        ) {
          this.teamsService.teams.splice(i, 1);
        }
      }
      this.teamsService.teams.push(this.formGroup.value);
      for (let team of this.teamsService.teams) {
        if (team.creatorEmail === this.userLoggedIn.email) {
          team.isAdmin = true;
        }
      }
    }
    this.dialog.closeAll();
  }
}
