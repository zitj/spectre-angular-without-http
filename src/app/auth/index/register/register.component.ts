import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  FormGroup,
  Validators,
  AbstractControl,
  ValidatorFn,
} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { UsersService } from '../../../services/users/users.service';
import { Subscription } from 'rxjs';
import { User } from '../../../data-models/user';
import { SuccessComponent } from '../../../shared-components/success/success.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  hidePassword: boolean = false;

  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private usersService: UsersService
  ) {}

  formGroup: FormGroup = new FormGroup({});
  emailErrMsg: string = 'Email is required';

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          this.uniqueEmail(this.usersService.users),
        ],
      ],
      password: ['', [Validators.required]],
    });

    console.log(this.usersService.users);
    this.usersService.signUp = true;
  }

  onSubmit(): void {
    this.dialog.open(SuccessComponent, {
      panelClass: 'registerSuccessContainer',
    });
    this.usersService.users.push(this.formGroup.value);
  }

  uniqueEmail(users: User[]): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      for (let user of users) {
        if (user.email == control.value) {
          this.emailErrMsg = 'This email already exists';
          return { uniqueEmail: false };
        }
      }
      if (!control.value) {
        this.emailErrMsg = 'Email is required';
        return { uniqueEmail: false };
      }
      return null;
    };
  }
}
