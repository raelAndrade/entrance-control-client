import { Component } from '@angular/core';

import { AuthService } from './security/auth.service';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CCB - Controle de Entradas';
  showTemplate: boolean = false;

  constructor(private authService: AuthService, private shared: SharedService) {
    this.shared = SharedService.getInstance();
  }

  ngOnInit() {
    this.shared.showTemplate.subscribe(
      show => this.showTemplate = show
    );
  }

  showContentWrapper() {
    return {
      'content-wrapper': this.shared.isLoggedIn()
    }
  }
}
