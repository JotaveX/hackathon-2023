import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropriedadeRoutingModule } from './propriedade-routing.module';
import { ListPropriedadeComponent } from './list-propriedade/list-propriedade.component';
import { DetailPropriedadeComponent } from './detail-propriedade/detail-propriedade.component';


@NgModule({
  declarations: [
    ListPropriedadeComponent,
    DetailPropriedadeComponent
  ],
  imports: [
    CommonModule,
    PropriedadeRoutingModule
  ]
})
export class PropriedadeModule { }
