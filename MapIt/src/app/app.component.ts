import { Component } from '@angular/core';
import {MarkerService} from "./services/markers.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MarkerService]
})
export class AppComponent {
  title = 'Map it';
  zoom: number = 10;
  // Start position
  lat: number = 51.678418;
  lng: number = 7.809007;

  markers: marker[];

  constructor(private _markerService: MarkerService){
    this.markers = this._markerService.getMarkers();
  }

  mapClicked($event){
    var newMarker: marker = {
      name: 'Untitled',
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: false
    }
    this.markers.push(newMarker);
    this._markerService.addMarker(newMarker);
  }

  clickedMarker(m: marker,i: number){
    console.log('Clicked marker :' + m.name+ ' At index : '+ i);
  }

  markerDraggedEnd(m, $event){
    console.log('Marker dragged: ', m, event);

    var updatedMarker = {
      name: m.name,
      lat: parseFloat(m.lat),
      lan: parseFloat(m.lan),
      draggable: false
    }

    var newLat = $event.coords.lat;
    var newLng = $event.coords.lng;
  }
}

interface marker{
  name?: string;
  lat: number;
  lng: number,
  draggable: boolean
}
