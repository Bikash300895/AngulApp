import {Injectable} from '@angular/core';
import {Init} from "../init-markers";


@Injectable()
export class MarkerService{
  constructor(){
    this.load();
  }

  addMarker(newMarker){
    var markers = this.getMarkers();
    markers.push(newMarker);
    localStorage.setItem('markers', JSON.stringify(markers));
  }

  updateMarker(marker, newLat, newLng){
    var markers = this.getMarkers();
    for(var i=0; i<markers.length; i++){
      console.log(newLat, newLng);
      if(markers[i].lat == marker.lat && markers[i].lng==marker.lng){
        console.log('got it');
        markers[i].lat = newLat;
        markers[i].lan = newLng;
      }
    }
    localStorage.setItem('markers', JSON.stringify(markers));
  }

  getMarkers(){
    var markers = JSON.parse(localStorage.getItem('markers'));
    console.log('markers', markers);
    return markers;
  }

  getDefaults(){
    var markers = [
      {
        name: 'company one',
        lat: 51.678418,
        lng: 7.809007,
        draggable: true
      },

      {
        name: 'company two',
        lat: 51.678418,
        lng: 9.809007,
        draggable: true
      },

      {
        name: 'company three',
        lat: 51.678418,
        lng: 8.809007,
        draggable: true
      },

      {
        name: 'company four',
        lat: 52.698418,
        lng: 7.809007,
        draggable: true
      },

    ]

    return markers;
  }

  load() {
    if (localStorage.getItem('markers') === null || localStorage.getItem('markers') === undefined) {
      console.log('No markers available. Creating');
      localStorage.setItem('markers', JSON.stringify(this.getDefaults()));
    }

    else {
      console.log('Loading markers');
    }
  }
}
