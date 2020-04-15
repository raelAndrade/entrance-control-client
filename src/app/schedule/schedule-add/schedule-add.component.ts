import { Component, OnInit } from '@angular/core';
import { Administrations } from 'src/app/models/administration.model';
import { MeetingService } from 'src/app/services/meeting.service';


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
    private service: MeetingService) { }

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
    for (let i = 0; i < admin.length; i++) {
      const adm = admin[i];
      if (adm.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
        filtered.push(adm);
      }
    }
    return filtered;
  }

}
