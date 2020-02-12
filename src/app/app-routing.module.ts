import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './security/login/login.component';
import { HomeComponent } from './components/home/home.component';

import { AuthGuard } from './guards/auth.guard';
import { ScheduledGuard } from './scheduled/guards/scheduled.guard';
import { MeetingsGuard } from './meetings/guards/meetings.guard';
import { LocalsGuard } from './locals/guards/locals.guard';


export const appRoutes: Routes = [
  {
    path: 'reuniao',
    loadChildren: './meetings/meetings.module#MeetingsModule',
    canActivate: [AuthGuard],
    canActivateChild: [MeetingsGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'agendamento',
    loadChildren: './scheduled/scheduled.module#ScheduledModule',
    canActivate: [AuthGuard],
    canActivateChild: [ScheduledGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'locais',
    loadChildren: './locals/locals.module#LocalsModule',
    canActivate: [AuthGuard],
    canActivateChild: [LocalsGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
