import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {};

  username = ''
  password = ''
  invalidLogin = false

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() { }

  checkLogin() {
    if (this.authService.authenticate(this.username, this.password)
    ) {
      this.router.navigate([''])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }

}
