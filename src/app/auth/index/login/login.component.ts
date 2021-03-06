import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { UsersService } from '../../../services/users/users.service';
import { Subscription } from 'rxjs';
import { SuccessComponent } from '../../../shared-components/success/success.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hidePassword: boolean = true;
  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private usersService: UsersService
  ) {}

  formGroup: FormGroup = new FormGroup({});
  credentialsInvalid: boolean = false;

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
    console.log(this.usersService.users);
  }

  onSubmit(): void {
    for (let user of this.usersService.users) {
      if (
        user.email === this.formGroup.value.email &&
        user.password === this.formGroup.value.password
      ) {
        localStorage.setItem('UserLoggedIn', JSON.stringify(user));
        this.dialog.open(SuccessComponent, {
          panelClass: 'loginSuccesContainer',
        });
      } else {
        this.credentialsInvalid = true;
      }
    }
  }
}
