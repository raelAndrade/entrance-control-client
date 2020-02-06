import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MeetingsListComponent } from './meetings/meetings-list/meetings-list.component';
import { MeetingsAddComponent } from './meetings/meetings-add/meetings-add.component';
import { MeetingsAuthenticationComponent } from './meetings/meetings-authentication/meetings-authentication.component';
import { LocalsListComponent } from './locals/locals-list/locals-list.component';
import { LocalsAddComponent } from './locals/locals-add/locals-add.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'meeting/lista', component: MeetingsListComponent },
  { path: 'meeting/novo', component: MeetingsAddComponent },
  { path: 'meeting/autenticacao', component: MeetingsAuthenticationComponent },
  { path: 'locals/lista', component: LocalsListComponent },
  { path: 'locals/novo', component: LocalsAddComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
