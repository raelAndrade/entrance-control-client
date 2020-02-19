import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/security/auth.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  shared: SharedService;

  constructor(private authService: AuthService) {
    this.shared = SharedService.getInstance();
  }

  ngOnInit() { }
}
