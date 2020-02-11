import { Component, OnInit } from '@angular/core';
import { Locals } from 'src/app/models/locals';
import { Administrations } from 'src/app/models/admin';
import { LocalsService } from 'src/app/services/locals.service';
import { AdmService } from 'src/app/services/adm.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schedule-list-church',
  templateUrl: './schedule-list-church.component.html',
  styleUrls: ['./schedule-list-church.component.css'],
  preserveWhitespaces: true
})
export class ScheduleListChurchComponent implements OnInit {

  locals: Locals[] = [];
  adm: any;
  admin: Administrations[] = [];
  filteredAdministration: any[];

  constructor(
    private serviceLocals: LocalsService,
    private service: AdmService,
    private router: Router) { }

  filterAdministration(event) {
    const query = event.query;
    this.service.list().subscribe(data => {
      this.filteredAdministration = this.filterAdmin(query, data);
    });
  }

  filterAdmin(query, admin: any[]): any[] {
    const filtered: any[] = [];
    for (let i = 0; i < admin.length; i++) {
      const adm = admin[i];
      if (adm.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
        filtered.push(adm);
      }
    }
    return filtered;
  }

  ngOnInit() {
    this.serviceLocals.list().subscribe(dados => this.locals = dados);
  }

  registerMeeting() {
    this.router.navigate(['agendamento/novoAgendamento']);
  }

}
