import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScheduleAddComponent } from './schedule-add/schedule-add.component';
import { ScheduleListMeetingComponent } from './schedule-list-meeting/schedule-list-meeting.component';
import { ScheduleListChurchComponent } from './schedule-list-church/schedule-list-church.component';

const scheduledRoutes: Routes = [
  { path: 'agendamento/listaIgrejas', component: ScheduleListChurchComponent },
  { path: 'agendamento/listaAgendamentos', component: ScheduleListMeetingComponent },
  { path: 'agendamento/novoAgendamento', component: ScheduleAddComponent }
];

@NgModule({
  imports: [RouterModule.forChild(scheduledRoutes)],
  exports: [RouterModule]
})

export class ScheduledRoutingModule { }
