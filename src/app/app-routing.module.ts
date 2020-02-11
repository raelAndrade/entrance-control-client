import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { LoginComponent } from './components/security/login/login.component';
import { HomeComponent } from './components/home/home.component';

import { AuthGuard } from './components/guards/auth.guard';
import { ScheduledGuard } from './scheduled/guards/scheduled.guard';
import { MeetingsGuard } from './meetings/guards/meetings.guard';


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
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
