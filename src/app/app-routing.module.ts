import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MapaDePragasComponent } from './pages/mapa-de-pragas/mapa-de-pragas.component';
import { AdicionarPragaComponent } from './pages/adicionar-praga/adicionar-praga.component';
import { AddButtonComponent } from './pages/add-button/add-button.component';

const routes: Routes = [
  { path: '', redirectTo: 'mapadapraga', pathMatch: 'full' },
  { path: 'mapadapraga', component: MapaDePragasComponent},
  { path: 'adicionarpraga', component: AdicionarPragaComponent},
  { path: 'produtor', loadChildren: () => import('./pages/produtor/produtor.module').then(m => m.ProdutorModule) },
  { path: 'propriedade', loadChildren: () => import('./pages/propriedade/propriedade.module').then(m => m.PropriedadeModule) },
  { path: 'add/viewProdutor', component: AddButtonComponent},
  { path: 'add/viewTecnico', component: AddButtonComponent},
  { path: 'ocorrencia', loadChildren: () => import('./pages/ocorrencia/ocorrencia.module').then(m => m.OcorrenciaModule) },
  { path: 'mapadapraga/viewProdutor', component: MapaDePragasComponent},
  { path: 'mapadapraga/viewTecnico', component: MapaDePragasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
