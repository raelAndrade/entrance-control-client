import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MeetingsListComponent } from './meetings/meetings-list/meetings-list.component';
import { MeetingsAddComponent } from './meetings/meetings-add/meetings-add.component';
import { LocalsListComponent } from './locals/locals-list/locals-list.component';
import { LocalsAddComponent } from './locals/locals-add/locals-add.component';

const routes: Routes = [
  /* { path: '', pathMatch: 'full', redirectTo: 'locals' },
  { path: 'locals', loadChildren: './locals/locals.module#LocalsModule' }, */

  { path: '', component: HeaderComponent },
  { path: 'meeting/lista', component: MeetingsListComponent },
  { path: 'meeting/novo', component: MeetingsAddComponent },
  { path: 'locals/lista', component: LocalsListComponent },
  { path: 'locals/novo', component: LocalsAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
