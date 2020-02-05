import { Component, OnInit } from '@angular/core';
import { Locals } from 'src/app/locals/locals-list/locals';
import { LocalsService } from 'src/app/locals/locals.service';

@Component({
  selector: 'app-meetings-list',
  templateUrl: './meetings-list.component.html',
  styleUrls: ['./meetings-list.component.css']
})
export class MeetingsListComponent implements OnInit {

  locals: Locals[] = [];

  constructor(private service: LocalsService) { }

  ngOnInit() {
    this.service.list().subscribe(dados => this.locals = dados);
  }

}
