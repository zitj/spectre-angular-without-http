import { Injectable } from '@angular/core';
import { User } from '../../data-models/user';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  signUp: boolean = false;
  signIn: boolean = false;

  users: User[] = [];
}
