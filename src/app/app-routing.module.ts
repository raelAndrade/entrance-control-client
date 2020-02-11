import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';

import { ScheduledGuard } from './scheduled/guards/scheduled.guard';


import { LoginComponent } from './components/security/login/login.component';
import { HomeComponent } from './components/home/home.component';

import { MeetingsGuard } from './meetings/guards/meetings.guard';
import { AuthGuard } from './guards/auth.guard';

export const appRoutes: Routes = [
  { path: 'reuniao',
    loadChildren: 'app/meetings/meetings.module#MeetingsModule',
    canActivate: [AuthGuard],
    canActivateChild: [MeetingsGuard],
    canLoad: [AuthGuard]
  },
  { path: 'agendamento',
    loadChildren: 'app/scheduled/scheduled.module#ScheduledModule',
    canActivate: [AuthGuard],
    canActivateChild: [ScheduledGuard],
    canLoad: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule {}
