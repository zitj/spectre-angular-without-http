import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users/users.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
})
export class SuccessComponent implements OnInit {
  constructor(
    public usersService: UsersService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  message = '';
  proceed = () => {
    if (this.usersService.signUp) {
      this.dialog.closeAll();
      this.usersService.signUp = false;
    } else {
      this.router.navigate(['main']);
      this.dialog.closeAll();
    }
  };

  ngOnInit(): void {
    if (this.usersService.signUp) {
      this.message = 'You have successfully created an account!';
    } else {
      this.message = 'You have successfully logged in!';
    }
  }
}
