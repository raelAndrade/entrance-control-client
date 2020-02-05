import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

interface Grupos {
  name: string;
}

interface Saloes {
  name: string;
}

@Component({
  selector: 'app-meetings-add',
  templateUrl: './meetings-add.component.html',
  styleUrls: ['./meetings-add.component.css']
})


export class MeetingsAddComponent implements OnInit {

  grupos: Grupos[];
  saloes: Saloes[];

  constructor() {
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

  ngOnInit() {
  }

}
