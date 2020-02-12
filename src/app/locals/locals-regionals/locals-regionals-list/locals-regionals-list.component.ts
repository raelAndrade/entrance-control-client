import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locals-regionals-list',
  templateUrl: './locals-regionals-list.component.html',
  styleUrls: ['./locals-regionals-list.component.css']
})
export class LocalsRegionalsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /*locals: Locals[] = [];
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
  }*/

}
