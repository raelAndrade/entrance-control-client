import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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

/* Componentes */
import { LocalsAdministrationAddComponent } from './locals-administration/locals-administration-add/locals-administration-add.component';
import { LocalsAdministrationListComponent } from './locals-administration/locals-administration-list/locals-administration-list.component';
import { LocalsChurchesAddComponent } from './locals-churches/locals-churches-add/locals-churches-add.component';
import { LocalsChurchesListComponent } from './locals-churches/locals-churches-list/locals-churches-list.component';
import { LocalsRegionalsAddComponent } from './locals-regionals/locals-regionals-add/locals-regionals-add.component';
import { LocalsRegionalsListComponent } from './locals-regionals/locals-regionals-list/locals-regionals-list.component';
import { LocalsRoowsAddComponent } from './locals-roows/locals-roows-add/locals-roows-add.component';
import { LocalsRoowsListComponent } from './locals-roows/locals-roows-list/locals-roows-list.component';

import { LocalsRoutingModule } from './locals.routing.module';

@NgModule({
  imports: [
    CommonModule,
    LocalsRoutingModule,
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
  exports: [],
  declarations: [
    LocalsAdministrationAddComponent,
    LocalsAdministrationListComponent,
    LocalsChurchesAddComponent,
    LocalsChurchesListComponent,
    LocalsRegionalsAddComponent,
    LocalsRegionalsListComponent,
    LocalsRoowsAddComponent,
    LocalsRoowsListComponent,
  ],
  providers: [],
})

export class LocalsModule { }
