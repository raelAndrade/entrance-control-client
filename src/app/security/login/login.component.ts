import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {};

  shared: SharedService;

  username = 'israel'
  password = ''
  invalidLogin = false

  constructor(private authService: AuthService, private router: Router) {
    this.shared = SharedService.getInstance();
  }

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
