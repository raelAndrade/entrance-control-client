import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeetingsAuthenticationComponent } from './meetings-authentication/meetings-authentication.component';
import { MeetingsListComponent } from './meetings-list/meetings-list.component';
import { MeetingsAddComponent } from './meetings-add/meetings-add.component';

const meetingsRoutes: Routes = [
  { path: 'reuniao/novo', component: MeetingsAddComponent },
  { path: 'reuniao/listarReunioes', component: MeetingsListComponent },
  { path: 'reuniao/autenticacao', component: MeetingsAuthenticationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(meetingsRoutes)],
  exports: [RouterModule]
})

export class MeetingsRoutingModule { }
