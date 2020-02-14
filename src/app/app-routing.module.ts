import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './security/login/login.component';
import { HomeComponent } from './components/home/home.component';

import { AuthGuard } from './guards/auth.guard';
import { LogoutComponent } from './security/logout/logout.component';


export const appRoutes: Routes = [
  {
    path: 'reuniao',
    loadChildren: './meetings/meetings.module#MeetingsModule',
  },
  {
    path: 'agendamento',
    loadChildren: './scheduled/scheduled.module#ScheduledModule',
  },
  {
    path: 'locais',
    loadChildren: './locals/locals.module#LocalsModule',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [AuthGuard]
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
