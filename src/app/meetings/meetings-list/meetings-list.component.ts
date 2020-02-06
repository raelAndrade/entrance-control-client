import { Component, OnInit } from '@angular/core';
import { Locals } from 'src/app/models/locals';
import { LocalsService } from 'src/app/services/locals.service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-meetings-list',
  templateUrl: './meetings-list.component.html',
  styleUrls: ['./meetings-list.component.css']
})
export class MeetingsListComponent implements OnInit {

  locals: Locals[] = [];
  status: SelectItem[];

  constructor(private service: LocalsService) { 
      this.status = [];
      this.status.push({label: 'Abrir', value: 'Abrir'});
      this.status.push({label: 'Fechar', value: 'Fechar'});
      this.status.push({label: 'Cancelar', value: 'Cancelar'});
  }

  ngOnInit() {
    this.service.list().subscribe(dados => this.locals = dados);
  }

}
