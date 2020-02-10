import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './components/security/auth.guard';
import { LoginComponent } from './components/security/login/login.component';
import { MeetingsListComponent } from './meetings/meetings-list/meetings-list.component';
import { MeetingsAddComponent } from './meetings/meetings-add/meetings-add.component';
import { MeetingsAuthenticationComponent } from './meetings/meetings-authentication/meetings-authentication.component';
import { HomeComponent } from './components/home/home.component';
import { ScheduleListChurchComponent } from './scheduled/schedule-list-church/schedule-list-church.component';
import { ScheduleListMeetingComponent } from './scheduled/schedule-list-meeting/schedule-list-meeting.component';
import { ScheduleAddComponent } from './scheduled/schedule-add/schedule-add.component';
import { LocalsListComponent } from './locals/locals-list/locals-list.component';
import { LocalsAddComponent } from './locals/locals-add/locals-add.component';

export const ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'reuniao/listarReunioes', component: MeetingsListComponent, canActivate: [AuthGuard] },
  { path: 'reuniao/novo', component: MeetingsAddComponent, canActivate: [AuthGuard] },
  { path: 'reuniao/autenticacao', component: MeetingsAuthenticationComponent, canActivate: [AuthGuard] },
  { path: 'agendamento/listaIgrejas', component: ScheduleListChurchComponent, canActivate: [AuthGuard]},
  { path: 'agendamento/listaAgendamentos', component: ScheduleListMeetingComponent, canActivate: [AuthGuard]},
  { path: 'agendamento/novoAgendamento', component: ScheduleAddComponent, canActivate: [AuthGuard] },

  // { path: 'locais/novo', component: LocalsAddComponent, /* canActivate: [AuthGuard] */ },
  // { path: 'agendamentos/lista', component: LocalsListComponent, /* canActivate: [AuthGuard] */ },
  // { path: 'agendamentos/listaAgendamentos', component:  }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(ROUTES);
