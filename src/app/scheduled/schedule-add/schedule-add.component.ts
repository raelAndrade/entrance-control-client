import { Component, OnInit } from '@angular/core';
import { Administrations } from 'src/app/models/admin';
import { AdmService } from 'src/app/services/adm.service';

@Component({
  selector: 'app-schedule-add',
  templateUrl: './schedule-add.component.html',
  styleUrls: ['./schedule-add.component.css'],
  preserveWhitespaces: true
})
export class ScheduleAddComponent implements OnInit {

  adm: any;
  admin: Administrations[] = [];
  filteredAdministration: any[];

  constructor(
    private service: AdmService) { }

  ngOnInit() {
  }

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

}
