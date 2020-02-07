import { Component, OnInit } from '@angular/core';
import { LocalsService } from '../../services/locals.service';
import { Locals } from '../../models/locals';
import { Administrations } from 'src/app/models/admin';
import { AdmService } from 'src/app/services/adm.service';

@Component({
  selector: 'app-locals-list',
  templateUrl: './locals-list.component.html',
  styleUrls: ['./locals-list.component.css'],
  preserveWhitespaces: true
})
export class LocalsListComponent implements OnInit {

  locals: Locals[] = [];
  adm: any;
  admin: Administrations[] = [];
  filteredAdministration: any[];

  constructor(private serviceLocals: LocalsService, private service: AdmService) { }

  filterAdministration(event) {
    const query = event.query;
    this.service.list().subscribe(data => {
      this.filteredAdministration = this.filterAdmin(query, data);
    });
  }

  filterAdmin(query, admin: any[]): any[] {
    const filtered: any[] = [];
    // tslint:disable-next-line:prefer-for-of
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

}
