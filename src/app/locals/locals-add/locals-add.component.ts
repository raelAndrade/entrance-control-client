import { Component, OnInit } from '@angular/core';
import { AdmService } from 'src/app/services/adm.service';
import { Administrations } from 'src/app/models/admin';

@Component({
  selector: 'app-locals-add',
  templateUrl: './locals-add.component.html',
  styleUrls: ['./locals-add.component.css'],
  preserveWhitespaces: true
})
export class LocalsAddComponent implements OnInit {

  adm: any;
  admin: Administrations[] = [];
  filteredAdministration: any[];

  constructor(private service: AdmService) { }

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

  ngOnInit() { }

}
