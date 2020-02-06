import { Component, OnInit } from '@angular/core';
import { LocalsService } from '../../services/locals.service';
import { Locals } from '../../models/locals';

@Component({
  selector: 'app-locals-list',
  templateUrl: './locals-list.component.html',
  styleUrls: ['./locals-list.component.css'],
  preserveWhitespaces: true
})
export class LocalsListComponent implements OnInit {

  locals: Locals[] = [];

  constructor(private service: LocalsService) { }

  ngOnInit() {
    this.service.list().subscribe(dados => this.locals = dados);
  }

}
