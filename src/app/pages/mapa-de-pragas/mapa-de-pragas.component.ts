import { Component } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { ActivatedRoute, Router } from '@angular/router';
import {GeolocationService} from '@ng-web-apis/geolocation';

@Component({
  selector: 'app-mapa-de-pragas',
  templateUrl: './mapa-de-pragas.component.html',
  styleUrls: ['./mapa-de-pragas.component.css']
})


export class MapaDePragasComponent {
  currentView:string = '';

  private setCurrentAction(): void {
    if (this.route.snapshot.url[1].path == 'viewProdutor') {
      this.currentView = 'produtor';
    } else {
      this.currentView = 'tecnico';
    }
  }
  
  ocorrencias = [
    {
      id: "1",
      tipo: "praga",
      posicao: {lat: -25.3138, lng: -53.2040}
    },
    {
      id: "2",
      tipo: "praga",
      posicao: {lat: -24.9845, lng: -53.3377}
    },
    {
      id: "3",
      tipo: "praga",
      posicao: {lat: -24.9787, lng: -53.3435}
    },
    {
      id: "4",
      tipo: "praga",
      posicao: {lat: -24.9747, lng: -53.3305}
    },
    {
      id: "5",
      tipo: "praga",
      posicao: {lat: -24.9635, lng: -53.3334}
    },
    {
      id: "6",
      tipo: "propriedade",
      posicao: {lat: -24.9375, lng: -53.3774}
    },
    {
      id: "7",
      tipo: "propriedade",
      posicao: {lat: -24.9875, lng: -53.3974}
    }
  ]

  display : any;
  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 12;
  
  markers: any[] = [];
  propriedade: any = {};

  offCanvasEnable = false;
  

  constructor(private router: Router,
    private readonly geolocation$: GeolocationService,
    private route: ActivatedRoute) { }
  
  clickMarker(marker: any){
    this.router.navigate(['ocorrencia','ocorrenciadetalhes', marker.id]);//Esse id vai ser o mesmo da ocorrência, quando entrar na pagina dela ao clicar no marker tu vai pegar as informações de tal ocorrência do backend
  }

  async getPosition() {
    this.geolocation$.subscribe(position => {
      this.center = {lat: position.coords.latitude, lng: position.coords.longitude};
      this.propriedade.position = {lat: position.coords.latitude, lng: position.coords.longitude};
      this.propriedade.fillColor = "blue";
    });
}

clickHouse(){
  this.router.navigate(['/propriedade','123', 'viewProdutor']);
}

  clickMap(event: google.maps.MapMouseEvent) {
    /*const marker = {
      position: {
        lat: event.latLng?.lat(),
        lng: event.latLng?.lng(),
      },
      id: this.markers.length + 1,
      label: {
        color: 'red',
        // text: 'Novo ponto ' + (this.marker.length + 1),
      },
      title: 'Nova marcação ',
      
    };
    this.markers.push(marker);*/
  }

  criarOcorrencia(id: string, tipoDeOcorrencia : string, posicao: any){
    let icon = "";
    if(tipoDeOcorrencia == "praga"){
      icon = '/assets/images/warning.svg';
    } else if(tipoDeOcorrencia == "propriedade"){
      icon = '/assets/images/home.svg';
    }

    const marker = {
      position: {
        lat: posicao.lat,
        lng: posicao.lng,
      },
      id: id,
      label: {
        color: 'red',
        // text: 'Novo ponto ' + (this.marker.length + 1),
      },
      title: 'Nova marcação ',
      icon: icon,
    };
    this.markers.push(marker);
    console.log(this.markers);
  }

  criarOcorrencias(){
    for (const ocorrencia of this.ocorrencias) {
      this.criarOcorrencia(ocorrencia.id, ocorrencia.tipo, ocorrencia.posicao);
    }
  }

  move(event: google.maps.MapMouseEvent) {
    if(event.latLng != null)
    this.display = event.latLng.toJSON();
  }

  public innerWidth: any;
  public innerHeight: any;
  ngOnInit() {
      this.innerWidth = window.innerWidth;
      this.innerHeight = window.innerHeight;
      this.getPosition();
      this.criarOcorrencias();
  }

}
