import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeetingsAuthenticationComponent } from './meetings-authentication/meetings-authentication.component';
import { MeetingsListComponent } from './meetings-list/meetings-list.component';
import { MeetingsAddComponent } from './meetings-add/meetings-add.component';

import { AuthGuard } from '../guards/auth.guard';
import { MeetingsGuard } from './guards/meetings.guard';

const meetingsRoutes: Routes = [
  {
    path: 'reuniao/novo',
    component: MeetingsAddComponent,
    canActivate: [AuthGuard],
    canActivateChild: [MeetingsGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'reuniao/listarReunioes',
    component: MeetingsListComponent,
    canActivate: [AuthGuard],
    canActivateChild: [MeetingsGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'reuniao/autenticacao',
    component: MeetingsAuthenticationComponent,
    canActivate: [AuthGuard],
    canActivateChild: [MeetingsGuard],
    canLoad: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(meetingsRoutes)],
  exports: [RouterModule]
})

export class MeetingsRoutingModule { }
