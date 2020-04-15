import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Message, ConfirmationService } from 'primeng/api';

import { MeetingService } from 'src/app/services/meeting.service';
import { Meeting } from 'src/app/models/meeting.model';


@Component({
  selector: 'app-schedule-list-meeting',
  templateUrl: './schedule-list-meeting.component.html',
  styles: [`
        :host ::ng-deep button {
            margin-right: .25em;
        }
    `],
  providers: [ConfirmationService],
  preserveWhitespaces: true
})
export class ScheduleListMeetingComponent implements OnInit {

  meeting = new Meeting('', '', '', '', '', '', '', '', '', '', null, null, null, null, null, null, null);
  msgs: Message[] = [];
  meetings: Meeting[] = [];

  constructor(
    private confirmationService: ConfirmationService,
    private serviceMeetings: MeetingService,
    private router: Router
  ) { }

  ngOnInit() {
    this.serviceMeetings.list().subscribe(dados => {
      this.meetings = dados
    });
  }

  openMeeting(id: string, meeting: Meeting): void {
    this.confirmationService.confirm({
      message: 'Você deseja abrir a ' + meeting.name + '?',
      header: 'Abrir Reunião',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        this.msgs = [
          {
            severity: 'info',
            detail: 'Reunião Aberta com sucesso!',
          }
        ];        
        this.serviceMeetings.changeStatusForOpened(id, this.meeting).subscribe((meeting: Meeting) => {
          this.meeting = meeting;
        });
        let buttonOpenMeeting = document.querySelector('.ui-button-info');
        buttonOpenMeeting.setAttribute("disabled", "disabled");
        this.router.navigate(['/agendamento/listar']);
      },
      reject: () => {
        this.msgs = [
          {
            severity: 'info',
            detail: 'Não foi possível abrir a ' + meeting.name + '.'
          }
        ];
      }
    });
  }

  cancelMeeting() {
    this.confirmationService.confirm({
      message: 'Você deseja cancelar a Reunião "X" ?',
      header: 'Cancelar Reunião "X"',
      icon: 'pi pi-info-circle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        this.msgs = [
          {
            severity: 'info',
            detail: 'Reunião "X" cancelada com sucesso!'
          }
        ];
        let buttonOpenMeeting = document.querySelector('.ui-button-info');
        buttonOpenMeeting.removeAttribute("disabled");
      },
      reject: () => {
        this.msgs = [
          {
            severity: 'info',
            detail: 'Não foi possível cancelar a Reunião "X"'
          }
        ];
      }
    });
  }

}
