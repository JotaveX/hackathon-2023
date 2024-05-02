import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPropriedadeComponent } from './list-propriedade/list-propriedade.component';
import { DetailPropriedadeComponent } from './detail-propriedade/detail-propriedade.component';

const routes: Routes = [
  { path: '', component: ListPropriedadeComponent},
  { path: 'new', component: DetailPropriedadeComponent},
  { path: ':id/viewTecnico', component: DetailPropriedadeComponent},
  { path: ':id/viewProdutor', component: DetailPropriedadeComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropriedadeRoutingModule { }
