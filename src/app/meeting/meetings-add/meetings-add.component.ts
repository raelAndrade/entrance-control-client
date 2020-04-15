
import { Component, OnInit } from '@angular/core';
import { SelectItem, MenuItem } from 'primeng/api';

import { Saloes } from '../../models/saloes';
import { Administrations } from '../../models/administration.model';
import { MeetingService } from 'src/app/services/meeting.service';
import { Meeting } from 'src/app/models/meeting.model';

@Component({
  selector: 'app-meetings-add',
  templateUrl: './meetings-add.component.html',
  styleUrls: ['./meetings-add.component.css']
})


export class MeetingsAddComponent implements OnInit {

  saloes: Saloes[];
  meeting: any;
  meetings: Meeting[] = [];
  // filteredAdministration: any[];

  breadcrumb: MenuItem[];

  constructor(private service: MeetingService) {
    this.saloes = [
      { name: 'Selecione o salão' },
      { name: 'Principal' },
      { name: 'Musical' },
      { name: 'Piedade' }
    ];
  }

  /* filterAdministration(event) {
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
  } */


  ngOnInit() { }

}
