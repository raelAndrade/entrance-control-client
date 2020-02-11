import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  shared: SharedService;

  constructor() {
    /* this.shared = SharedService.getInstance(); */
  }

  ngOnInit() { }
}
