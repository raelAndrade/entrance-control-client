import { Component, OnInit } from '@angular/core';
import { Message, ConfirmationService } from 'primeng/api';
import { NgClass } from '@angular/common';

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

  msgs: Message[] = [];

  constructor(private confirmationService: ConfirmationService) { }

  ngOnInit() {
  }

  openMeeting() {
    this.confirmationService.confirm({
      message: 'Você deseja abrir a Reunião "X" ?',
      header: 'Abrir Reunião "X"',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        this.msgs = [
          {
            severity: 'info',
            detail: 'Reunião "X" Aberta com sucesso!',
          }
        ];
        let buttonOpenMeeting = document.querySelector('.ui-button-info');
        buttonOpenMeeting.setAttribute("disabled", "disabled");
      },
      reject: () => {
        this.msgs = [
          {
            severity: 'info',
            detail: 'Não foi possível abrir a Reunião "X".'
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
