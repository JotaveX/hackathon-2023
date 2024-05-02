import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailOcorrenciaComponent } from './detail-ocorrencia/detail-ocorrencia.component';
import { ListOcorrenciaComponent } from './list-ocorrencia/list-ocorrencia.component';

const routes: Routes = [
  { path: 'listarocorrencias', component: ListOcorrenciaComponent},
  { path: 'ocorrenciadetalhes/:id', component: DetailOcorrenciaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OcorrenciaRoutingModule { }
