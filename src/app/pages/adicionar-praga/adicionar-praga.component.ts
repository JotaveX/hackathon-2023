import { Component } from '@angular/core';
import { GeolocationService } from '@ng-web-apis/geolocation';

@Component({
  selector: 'app-adicionar-praga',
  templateUrl: './adicionar-praga.component.html',
  styleUrls: ['./adicionar-praga.component.css']
})
export class AdicionarPragaComponent {
  display : any;
  center: google.maps.LatLngLiteral = {lat: 0, lng: 0};
  zoom = 10;
  marker: any = {};

  constructor(private readonly geolocation$: GeolocationService) { }

  async getPosition() {
    this.geolocation$.subscribe(position => {
      this.center = {lat: position.coords.latitude, lng: position.coords.longitude};
    });
}

  culturas: string[] = ["","Aveia", "Cevada", "Milho"];
  pragas: string[] = ["","Ácaro", "Pulgão"];

  culturaSelecionada: string | null = null;
  pragaSelecionada: string | null = null;
  localizacaoSelecionada: any | null = null;

  move(event: google.maps.MapMouseEvent) {
    if(event.latLng != null)
    this.display = event.latLng.toJSON();
  }

  moveMap(event: google.maps.MapMouseEvent) {
    if(event.latLng!= null){
      this.display = event.latLng.toJSON();
    }
  }

  newPlague(event: google.maps.MapMouseEvent){
    this.marker = {
      position: {
        lat: event.latLng?.lat(),
        lng: event.latLng?.lng(),
      },
      label: {
        color: 'red',
        // text: 'Novo ponto ' + (this.marker.length + 1),
      },
      title: 'Nova marcação ' + (this.marker.length + 1),
      
    };
    this.localizacaoSelecionada = this.marker.position;
  }

  save(){
    if(this.pragaSelecionada && this.culturaSelecionada && this.marker.length > 0){
      //Salva nova praga
      console.log("Salvamento de praga feito");
    }
  }
  

  ngOnInit() {
      this.getPosition();
  }
}
