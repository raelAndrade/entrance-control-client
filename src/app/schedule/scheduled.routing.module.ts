import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScheduleAddComponent } from './schedule-add/schedule-add.component';
import { ScheduleListMeetingComponent } from './schedule-list-meeting/schedule-list-meeting.component';
import { ScheduleListChurchComponent } from './schedule-list-church/schedule-list-church.component';
import { AuthGuard } from '../guards/auth.guard';
import { ScheduledGuard } from './guards/scheduled.guard';

const scheduledRoutes: Routes = [
  {
    path: 'agendamento/listarIgrejas',
    component: ScheduleListChurchComponent,
    canActivate: [AuthGuard],
    canActivateChild: [ScheduledGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'agendamento/listar',
    component: ScheduleListMeetingComponent,
    canActivate: [AuthGuard],
    canActivateChild: [ScheduledGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'agendamento/novo',
    component: ScheduleAddComponent,
    canActivate: [AuthGuard],
    canActivateChild: [ScheduledGuard],
    canLoad: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(scheduledRoutes)],
  exports: [RouterModule]
})

export class ScheduledRoutingModule { }
