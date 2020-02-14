import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeetingsListComponent } from './meetings-list/meetings-list.component';
import { MeetingsAuthenticationComponent } from './meetings-authentication/meetings-authentication.component';
import { MeetingsAddComponent } from './meetings-add/meetings-add.component';
import { MeetingsRoutingModule } from './meetings.routing.module';

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
import { BreadcrumbModule } from 'primeng/components/breadcrumb/breadcrumb';

@NgModule({
  imports: [
    CommonModule,
    MeetingsRoutingModule,
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
    BreadcrumbModule,
  ],
  exports: [],
  declarations: [
    MeetingsAddComponent,
    MeetingsAuthenticationComponent,
    MeetingsListComponent
  ],
  providers: [],
})
export class MeetingsModule { }
