import { Component, OnInit } from '@angular/core';
import { MeetingService } from 'src/app/services/meeting.service';

import { Router } from '@angular/router';
import { Meeting } from 'src/app/models/meeting.model';

@Component({
  selector: 'app-schedule-list-church',
  templateUrl: './schedule-list-church.component.html',
  styleUrls: ['./schedule-list-church.component.css'],
  preserveWhitespaces: true
})
export class ScheduleListChurchComponent implements OnInit {

  meetings: Meeting[] = [];
  meeting: any;
  // filteredAdministration: any[];

  constructor(
    private serviceMeetings: MeetingService,
    private router: Router) { }

  /* filterAdministration(event) {
    const query = event.query;
    this.serviceMeetings.list().subscribe(data => {
      this.filteredAdministration = this.filterAdmin(query, data);
    });
  } */

 /*  filterAdmin(query, meetings: any[]): any[] {
    const filtered: any[] = [];
    for (let i = 0; i < meetings.length; i++) {
      const meeting = meetings[i];
      if (meeting.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
        filtered.push(meeting);
      }
    }
    return filtered;
  } */

  ngOnInit() {
    this.serviceMeetings.list().subscribe(dados => {
      this.meetings = dados
    });    
  }

  registerMeeting() {
    this.router.navigate(['agendamento/novo']);
  }

}
