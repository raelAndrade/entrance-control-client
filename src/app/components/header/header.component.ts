import { Component, OnInit } from '@angular/core';

import { SharedService } from 'src/app/services/shared.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public shared: SharedService;

  constructor() {
   /*  this.shared = SharedService.getInstance();
    this.shared.user = new User(); */
  }

  ngOnInit() {
  }

  /* signOut() {
    this.shared.token = null;
    this.shared.user = null;
    window.location.href = '/login';
    window.location.reload();
  } */

}
