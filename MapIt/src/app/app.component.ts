import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Map it';
  zoom: number = 10;
  // Start position
  lat: number = 51.678418;
  lng: number = 7.809007;

  markers: marker[] = [
    {
      name: 'company one',
      lat:  51.678418,
      lng: 7.809007,
      draggable: true
    },

    {
      name: 'company two',
      lat:  51.678418,
      lng: 9.809007,
      draggable: true
    },

    {
      name: 'company three',
      lat:  51.678418,
      lng: 8.809007,
      draggable: true
    },

    {
      name: 'company four',
      lat:  52.698418,
      lng: 7.809007,
      draggable: true
    },

  ]

  constructor(){

  }

  mapClicked($event){
    var newMarker: marker = {
      name: 'Untitled',
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: false
    }
    this.markers.push(newMarker);
  }

  clickedMarker(m: marker,i: number){
    console.log('Clicked marker :' + m.name+ ' At index : '+ i);
  }

  markerDraggedEnd(m, $event){
    console.log('Marker dragged: '+m.name);
  }
}

interface marker{
  name?: string;
  lat: number;
  lng: number,
  draggable: boolean
}
