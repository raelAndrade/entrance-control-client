import { ScheduleAddComponent } from './schedule-add/schedule-add.component';
import { ScheduleListMeetingComponent } from './schedule-list-meeting/schedule-list-meeting.component';
import { ScheduleListChurchComponent } from './schedule-list-church/schedule-list-church.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const scheduledRoutes: Routes = [
    { path: 'listaIgrejas', component: ScheduleListChurchComponent },
    { path: 'listaAgendamentos', component: ScheduleListMeetingComponent },
    { path: 'novoAgendamento', component: ScheduleAddComponent }
];

@NgModule({
    imports: [RouterModule.forChild(scheduledRoutes)],
    exports: [RouterModule]
})

export class ScheduledRoutingModule {}
