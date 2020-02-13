
import { Component } from '@angular/core';

import { AuthService } from './security/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CCB - Controle de Entradas';

  constructor(private authService: AuthService) { }

  ngOnInit() { }

  /* showWrapper() {
    if (this.authService.isUserLoggedIn()) {
      this.showPageWrapper = !this.showPageWrapper;
    }
  } */
}
