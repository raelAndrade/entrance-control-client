import { ScheduleListMeetingComponent } from './schedule-list-meeting/schedule-list-meeting.component';
import { ScheduleListChurchComponent } from './schedule-list-church/schedule-list-church.component';
import { ScheduleAddComponent } from './schedule-add/schedule-add.component';
import { ScheduledRoutingModule } from './scheduled.routing.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        ScheduledRoutingModule
    ],
    exports: [],
    declarations: [
        ScheduleAddComponent,
        ScheduleListChurchComponent,
        ScheduleListMeetingComponent
    ],
    providers: [],
})
export class ScheduledModule { }
