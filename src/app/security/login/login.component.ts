import { SharedService } from '../../services/shared.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';
import { AuthService } from '../auth.service';

import { User } from '../../models/user.model';
import { CurrentUser } from 'src/app/models/current-user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /* private user: User = new User(); */

  showMenu = false;
  user = new User(null, '', '', '', '');
  shared: SharedService;
  message: string;

  constructor(private authService: AuthService, private router: Router, private userService: UserService) {
    this.shared = SharedService.getInstance();
  }

  ngOnInit() {
    /* this.authService.showMenuEmitter.subscribe(
      mostrar => this.showMenu = mostrar
    ); */
  }

  /* login() {
    console.log(this.user);
    this.authService.login(this.user);
    this.router.navigate(['/']);
  }
   */

  /* logout() {
    this.authService.logout();
  } */

  login() {
    this.message = '';
    this.userService.login(this.user).subscribe((userAuthentication: CurrentUser) => {
      this.shared.token = userAuthentication.token;
      this.shared.user.profile = this.shared.user.profile.substring(5);
      this.shared.showTemplate.emit(true);
      this.router.navigate(['/']);
    }, err => {
      this.shared.token = null;
      this.shared.user = null;
      this.shared.showTemplate.emit(false);
      this.message = 'Erro';
    });
  }

  cancelLogin() {
    this.message = '';
    this.user = new User(null, '', '', '', '');
    window.location.href = '/login';
    window.location.reload();
  }

}
