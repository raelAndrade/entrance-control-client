import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocalsRegionalsAddComponent } from './locals-regionals/locals-regionals-add/locals-regionals-add.component';
import { LocalsRegionalsListComponent } from './locals-regionals/locals-regionals-list/locals-regionals-list.component';
import { LocalsAdministrationAddComponent } from './locals-administration/locals-administration-add/locals-administration-add.component';
import { LocalsAdministrationListComponent } from './locals-administration/locals-administration-list/locals-administration-list.component';
import { LocalsChurchesAddComponent } from './locals-churches/locals-churches-add/locals-churches-add.component';
import { LocalsChurchesListComponent } from './locals-churches/locals-churches-list/locals-churches-list.component';

const localsRoutes: Routes = [
  { path: 'regionais/cadastrarRegional', component: LocalsRegionalsAddComponent },
  { path: 'regionais/listarRegionais', component: LocalsRegionalsListComponent },

  { path: 'administracao/cadastrarAdministracao', component: LocalsAdministrationAddComponent },
  { path: 'administracao/ListarAdministroes', component: LocalsAdministrationListComponent },

  { path: 'igrejas/cadastrarIgreja', component: LocalsChurchesAddComponent },
  { path: 'igrejas/ListarIgrejas', component: LocalsChurchesListComponent },

  { path: 'saloes/cadastrarSalao', component: LocalsChurchesAddComponent },
  { path: 'saloes/ListarSaloes', component: LocalsChurchesListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(localsRoutes)],
  exports: [RouterModule]
})

export class LocalsRoutingModule { }
