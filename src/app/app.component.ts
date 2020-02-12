
import { Component } from '@angular/core';

import { AuthService } from './components/security/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CCB - Controle de Entradas';

  /* showMenu = false; */

  constructor(private authService: AuthService) { }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    /* this.authService.showMenuEmitter.subscribe(
      mostrar => this.showMenu = mostrar
    ); */
  }
}
