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
    path: 'regionais/cadastrarRegional',
    component: LocalsRegionalsAddComponent,
    canActivate: [AuthGuard],
    canActivateChild: [LocalsGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'regionais/listarRegionais',
    component: LocalsRegionalsListComponent,
    canActivate: [AuthGuard],
    canActivateChild: [LocalsGuard],
    canLoad: [AuthGuard]
  },

  {
    path: 'administracao/cadastrarAdministracao',
    component: LocalsAdministrationAddComponent,
    canActivate: [AuthGuard],
    canActivateChild: [LocalsGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'administracao/ListarAdministroes',
    component: LocalsAdministrationListComponent,
    canActivate: [AuthGuard],
    canActivateChild: [LocalsGuard],
    canLoad: [AuthGuard]
  },

  {
    path: 'igrejas/cadastrarIgreja',
    component: LocalsChurchesAddComponent,
    canActivate: [AuthGuard],
    canActivateChild: [LocalsGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'igrejas/ListarIgrejas',
    component: LocalsChurchesListComponent,
    canActivate: [AuthGuard],
    canActivateChild: [LocalsGuard],
    canLoad: [AuthGuard]
  },

  {
    path: 'saloes/cadastrarSalao',
    component: LocalsChurchesAddComponent,
    canActivate: [AuthGuard],
    canActivateChild: [LocalsGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'saloes/ListarSaloes',
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
