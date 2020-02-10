import { Component } from '@angular/core';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CCB - Controle de Entradas';
  showTemplate: false;
  public shared: SharedService;

  constructor() {
    this.shared = SharedService.getInstance();
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.shared.showTemplate.subscribe(
      show => this.showTemplate = show
    );
  }

  showWrapper() {
    return {
      'page-wrapper' : this.shared.isLoggedIn()
    };
  }

}
