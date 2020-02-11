import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ScheduleAddComponent } from './scheduled/schedule-add/schedule-add.component';
import { ScheduleListChurchComponent } from './scheduled/schedule-list-church/schedule-list-church.component';
import { ScheduleListMeetingComponent } from './scheduled/schedule-list-meeting/schedule-list-meeting.component';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/security/login/login.component';

import { MeetingsAuthenticationComponent } from './meetings/meetings-authentication/meetings-authentication.component';
import { MeetingsListComponent } from './meetings/meetings-list/meetings-list.component';
import { MeetingsAddComponent } from './meetings/meetings-add/meetings-add.component';

const APP_ROUTES: Routes = [
    { path: 'reuniao/novo', component: MeetingsAddComponent },
    { path: 'reuniao/listarReunioes', component: MeetingsListComponent },
    { path: 'reuniao/autenticacao', component: MeetingsAuthenticationComponent },

    { path: 'agendamento/listaIgrejas', component: ScheduleListChurchComponent },
    { path: 'agendamento/listaAgendamentos', component: ScheduleListMeetingComponent },
    { path: 'agendamento/novoAgendamento', component: ScheduleAddComponent },

    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
