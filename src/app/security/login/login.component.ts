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

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() { }

  login() {
    this.authService.login(this.user).subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this.router.navigate([''])
      }, err =>
      this.router.navigate(['/login'])
    )
  }

}
