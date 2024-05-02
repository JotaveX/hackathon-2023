import { Component } from '@angular/core';

@Component({
  selector: 'app-detail-ocorrencia',
  templateUrl: './detail-ocorrencia.component.html',
  styleUrls: ['./detail-ocorrencia.component.css']
})
export class DetailOcorrenciaComponent {
  cultura : string = "Trigo";
  ocorrencia : string = "Ferrugem";
  localizacao : any = {lat: -22, lng: 22};
}
