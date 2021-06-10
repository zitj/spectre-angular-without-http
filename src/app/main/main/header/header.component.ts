import { Component, OnInit } from '@angular/core';
import { User } from '../../../data-models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userLoggedIn: User;
  constructor(public router: Router) {
    this.userLoggedIn = JSON.parse(
      localStorage.getItem('UserLoggedIn') || '{}'
    );
  }

  ngOnInit(): void {}

  logOut(): void {
    localStorage.removeItem('UserLoggedIn');
    this.router.navigate(['/auth']);
  }
}
