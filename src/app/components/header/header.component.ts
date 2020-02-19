import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/security/auth.service';
import { SharedService } from 'src/app/services/shared.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public shared: SharedService;

  constructor(private router: Router, private authService: AuthService) {
    this.shared = SharedService.getInstance();
  }

  ngOnInit() { }

  /* logout() {
    this.router.navigate(['/login']);
  } */

}
