import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ScheduleAddComponent } from './schedule-add/schedule-add.component';
import { ScheduleListChurchComponent } from './schedule-list-church/schedule-list-church.component';
import { ScheduleListMeetingComponent } from './schedule-list-meeting/schedule-list-meeting.component';

import { ScheduledRoutingModule } from './scheduled.routing.module';

/* Componentes PrimeNG */
import { MessagesModule } from 'primeng/components/messages/messages';
import { PanelModule } from 'primeng/components/panel/panel';
import { TableModule } from 'primeng/components/table/table';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { FieldsetModule } from 'primeng/components/fieldset/fieldset';
import { AutoCompleteModule } from 'primeng/components/autocomplete/autocomplete';
import { ButtonModule } from 'primeng/components/button/button';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { CheckboxModule } from 'primeng/components/checkbox/checkbox';
import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';
import { ToggleButtonModule } from 'primeng/components/togglebutton/togglebutton';



@NgModule({
  declarations: [
    ScheduleAddComponent,
    ScheduleListChurchComponent,
    ScheduleListMeetingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ScheduledRoutingModule,
    MessagesModule,
    PanelModule,
    TableModule,
    InputTextModule,
    CalendarModule,
    FieldsetModule,
    AutoCompleteModule,
    ButtonModule,
    DropdownModule,
    CheckboxModule,
    SelectButtonModule,
    ToggleButtonModule,
  ],
  exports: []
})
export class ScheduledModule { }
