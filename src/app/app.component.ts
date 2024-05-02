import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mapa';

  constructor() { }

  ngOnInit(): void {
    
  }
  display : any;
  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 4;
  message: string = ":danger: **Praga proximo a sua area** :danger:";

  

  moveMap(event: google.maps.MapMouseEvent) {
    if(event.latLng!= null){
      this.display = event.latLng.toJSON();
      this.center = event.latLng.toJSON();
      this.zoom = this.zoom +1;
    }
  }

  move(event: google.maps.MapMouseEvent) {
    if(event.latLng != null)
    this.display = event.latLng.toJSON();
  }
}
