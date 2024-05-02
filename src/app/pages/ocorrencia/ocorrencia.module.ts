import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OcorrenciaRoutingModule } from './ocorrencia-routing.module';
import { DetailOcorrenciaComponent } from './detail-ocorrencia/detail-ocorrencia.component';
import { ListOcorrenciaComponent } from './list-ocorrencia/list-ocorrencia.component';


@NgModule({
  declarations: [
    DetailOcorrenciaComponent,
    ListOcorrenciaComponent
  ],
  imports: [
    CommonModule,
    OcorrenciaRoutingModule
  ]
})
export class OcorrenciaModule { }
