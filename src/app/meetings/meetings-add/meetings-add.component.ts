import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Grupos } from 'src/app/models/grupos';
import { Saloes } from 'src/app/models/saloes';
import { AdmService } from 'src/app/services/adm.service';
import { Administrations } from 'src/app/models/admin';

@Component({
  selector: 'app-meetings-add',
  templateUrl: './meetings-add.component.html',
  styleUrls: ['./meetings-add.component.css']
})


export class MeetingsAddComponent implements OnInit {

  grupos: Grupos[];
  saloes: Saloes[];
  adm: any;
  admin: Administrations[] = [];
  filteredAdministration: any[];

  constructor(private service: AdmService) {
    this.grupos = [
      { name: 'Selecione o grupo' },
      { name: 'Administração' },
      { name: 'Ministerial' },
      { name: 'Geral' }
    ];

    this.saloes = [
      { name: 'Selecione o salão' },
      { name: 'Principal' },
      { name: 'Musical' },
      { name: 'Piedade' }
    ];
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


  ngOnInit() { }

}
