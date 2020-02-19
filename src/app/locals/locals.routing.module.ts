import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocalsRegionalsAddComponent } from './locals-regionals/locals-regionals-add/locals-regionals-add.component';
import { LocalsRegionalsListComponent } from './locals-regionals/locals-regionals-list/locals-regionals-list.component';
import { LocalsAdministrationAddComponent } from './locals-administration/locals-administration-add/locals-administration-add.component';
import { LocalsAdministrationListComponent } from './locals-administration/locals-administration-list/locals-administration-list.component';
import { LocalsChurchesAddComponent } from './locals-churches/locals-churches-add/locals-churches-add.component';
import { LocalsChurchesListComponent } from './locals-churches/locals-churches-list/locals-churches-list.component';

import { AuthGuard } from '../guards/auth.guard';
import { LocalsGuard } from './guards/locals.guard';

const localsRoutes: Routes = [
  {
    path: 'regionais/cadastrar',
    component: LocalsRegionalsAddComponent,
    canActivate: [AuthGuard],
    canActivateChild: [LocalsGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'regionais/listar',
    component: LocalsRegionalsListComponent,
    canActivate: [AuthGuard],
    canActivateChild: [LocalsGuard],
    canLoad: [AuthGuard]
  },

  {
    path: 'administracao/cadastrar',
    component: LocalsAdministrationAddComponent,
    canActivate: [AuthGuard],
    canActivateChild: [LocalsGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'administracao/listar',
    component: LocalsAdministrationListComponent,
    canActivate: [AuthGuard],
    canActivateChild: [LocalsGuard],
    canLoad: [AuthGuard]
  },

  {
    path: 'igrejas/cadastrar',
    component: LocalsChurchesAddComponent,
    canActivate: [AuthGuard],
    canActivateChild: [LocalsGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'igrejas/listar',
    component: LocalsChurchesListComponent,
    canActivate: [AuthGuard],
    canActivateChild: [LocalsGuard],
    canLoad: [AuthGuard]
  },

  {
    path: 'saloes/cadastrar',
    component: LocalsChurchesAddComponent,
    canActivate: [AuthGuard],
    canActivateChild: [LocalsGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'saloes/listar',
    component: LocalsChurchesListComponent,
    canActivate: [AuthGuard],
    canActivateChild: [LocalsGuard],
    canLoad: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(localsRoutes)],
  exports: [RouterModule]
})

export class LocalsRoutingModule { }
