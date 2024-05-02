import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailProdutorComponent } from './detail-produtor/detail-produtor.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: ':id/viewTecnico', component: DetailProdutorComponent},
  { path: ':id/viewProdutor', component: DetailProdutorComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutorRoutingModule { }

