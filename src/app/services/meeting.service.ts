import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Meeting } from '../models/meeting.model';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Meeting[]>(`${environment.apiUrlMeetingService}`)
      .pipe(tap(console.log));
  }


  findMeetingById(id: string) {
    return this.http.get(`${environment.apiUrlMeetingService}/${id}`);
  }

  changeStatusForClosed(id: string, meeting: Meeting) {
    return this.http.patch(`${environment.apiUrlMeetingService}/${id}/close-meeting`, meeting);
  }

  changeStatusForOpened(id: string, meeting: Meeting) {
    return this.http.patch(`${environment.apiUrlMeetingService}/${id}/open-meeting`, meeting);
  }
}
