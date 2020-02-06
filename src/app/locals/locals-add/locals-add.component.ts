import { Component, OnInit } from '@angular/core';
import { Administrations } from '../../models/admin';
import { AdmService } from '../../services/adm.service';

@Component({
  selector: 'app-locals-add',
  templateUrl: './locals-add.component.html',
  styleUrls: ['./locals-add.component.css'],
  preserveWhitespaces: true
})
export class LocalsAddComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
