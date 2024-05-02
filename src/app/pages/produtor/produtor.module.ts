import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutorRoutingModule } from './produtor-routing.module';
import { ListProdutorComponent } from './list-produtor/list-produtor.component';
import { DetailProdutorComponent } from './detail-produtor/detail-produtor.component';


@NgModule({
  declarations: [
    ListProdutorComponent,
    DetailProdutorComponent
  ],
  imports: [
    CommonModule,
    ProdutorRoutingModule
  ]
})
export class ProdutorModule { }
