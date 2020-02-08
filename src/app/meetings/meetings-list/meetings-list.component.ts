import { Component, OnInit } from '@angular/core';
import { Locals } from 'src/app/models/locals';
import { LocalsService } from 'src/app/services/locals.service';
import { SelectItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meetings-list',
  templateUrl: './meetings-list.component.html',
  styleUrls: ['./meetings-list.component.css'],
  preserveWhitespaces: true
})
export class MeetingsListComponent implements OnInit {

  locals: Locals[] = [];

  constructor(private service: LocalsService, private router: Router) {
  }

  ngOnInit() {
    this.service.list().subscribe(dados => this.locals = dados);
  }

  accessMeeting() {
    this.router.navigate(['reuniao/autenticacao']);
  }
}
