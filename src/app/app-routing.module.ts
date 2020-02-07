import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './components/security/auth.guard';
import { MeetingsListComponent } from './meetings/meetings-list/meetings-list.component';
import { MeetingsAddComponent } from './meetings/meetings-add/meetings-add.component';
import { MeetingsAuthenticationComponent } from './meetings/meetings-authentication/meetings-authentication.component';
import { LocalsListComponent } from './locals/locals-list/locals-list.component';
import { LocalsAddComponent } from './locals/locals-add/locals-add.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/security/login/login.component';

export const ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, /* canActivate: [AuthGuard] */ },
  { path: 'reuniao/lista', component: MeetingsListComponent, /* canActivate: [AuthGuard] */ },
  { path: 'reuniao/novo', component: MeetingsAddComponent, /* canActivate: [AuthGuard] */ },
  { path: 'reuniao/autenticacao', component: MeetingsAuthenticationComponent, /* canActivate: [AuthGuard] */ },
  { path: 'locais/lista', component: LocalsListComponent, /* canActivate: [AuthGuard] */ },
  { path: 'locais/novo', component: LocalsAddComponent, /* canActivate: [AuthGuard] */ }
];

/* @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
}) */

/* export class AppRoutingModule { } */

export const routes: ModuleWithProviders = RouterModule.forRoot(ROUTES);
