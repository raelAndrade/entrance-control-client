import { Component, OnInit } from '@angular/core';
import { Locals } from 'src/app/models/locals';
import { LocalsService } from 'src/app/services/locals.service';
import { SelectItem, Message, ConfirmationService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meetings-list',
  templateUrl: './meetings-list.component.html',
  styles: [`
        :host ::ng-deep button {
            margin-right: .25em;
        }
    `],
  providers: [ConfirmationService],
  preserveWhitespaces: true
})
export class MeetingsListComponent implements OnInit {

  locals: Locals[] = [];
  msgs: Message[] = [];

  constructor(private service: LocalsService, private router: Router, private confirmationService: ConfirmationService) {
  }

  ngOnInit() {
    this.service.list().subscribe(dados => this.locals = dados);
  }

  /* accessMeeting() {
    this.router.navigate(['reuniao/autenticacao']);
  } */

  closeMeeting() {
    this.confirmationService.confirm({
      message: 'Você deseja fechar a Reunião "X" ?',
      header: 'Fechar Reunião "X"',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        this.msgs = [
          {
            severity: 'info',
            detail: 'Reunião "X" fechada com sucesso!',
          }
        ];
        let buttonOpenMeeting = document.querySelector('.ui-button-success');
        buttonOpenMeeting.setAttribute("disabled", "disabled");
      },
      reject: () => {
        this.msgs = [
          {
            severity: 'info',
            detail: 'Não foi possível fechar a Reunião "X".'
          }
        ];
      }
    });
  }

  accessMeeting() {
    this.confirmationService.confirm({
      message: 'Você deseja acessar a Reunião "X" ?',
      header: 'Acessar Reunião "X"',
      icon: 'pi pi-info-circle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        this.router.navigate(['reuniao/autenticacao']);
      },
    });
  }
}
