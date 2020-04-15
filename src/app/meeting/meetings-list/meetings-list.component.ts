import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Meeting } from 'src/app/models/meeting.model';
import { MeetingService } from 'src/app/services/meeting.service';

import { Message, ConfirmationService } from 'primeng/api';

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

  meeting = new Meeting('', '', '', '', '', '', '', '', '', '', null, null, null, null, null, null, null);
  meetings: Meeting[] = [];
  msgs: Message[] = [];

  constructor(
    private serviceMeetings: MeetingService, 
    private router: Router, 
    private confirmationService: ConfirmationService) {
  }

  ngOnInit() {
    this.serviceMeetings.list().subscribe(dados => {
      this.meetings = dados
    });
  }

  accessMeeting(id: string) {
    this.router.navigate(['/reuniao/autenticacao', id]);
  }

  changeStatusClosed(id: string, meeting: Meeting):void {
    this.confirmationService.confirm({
      message: 'Você deseja fechar a ' + meeting.name  + '?',
      header: 'Fechar Reunião',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        this.msgs = [
          {
            severity: 'info',
            detail: 'Reunião: ' + meeting.name + ', fechada com sucesso!',
          }
        ];
        this.serviceMeetings.changeStatusForClosed(id, this.meeting).subscribe((meeting: Meeting) => {
          this.meeting = meeting;
        });
        this.router.navigate(['/reuniao/listar']);
      },
      reject: () => {
        this.msgs = [
          {
            severity: 'info',
            detail: 'Não foi possível fechar a ' + meeting.name + '.'
          }
        ];
      }
    });
  }

  /* accessMeeting(id: string) {
    this.confirmationService.confirm({
      message: 'Você deseja acessar a Reunião "X" ?',
      header: 'Acessar Reunião "X"',
      icon: 'pi pi-info-circle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        this.router.navigate(['/reuniao/autenticacao', id]);
      },
    });
  } */
}
