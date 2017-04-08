import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {SpotifyService} from "../../services/spotify.service";

@Component({
  selector: 'artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit{
  ngOnInit(): void {
    this._route.params
      .map(params => params['id'])
      .subscribe( (id) => {
        this._spotifyService.getArtist(id)
          .subscribe(artist=> {
            this.artist = artist;
          })
      })
  }
  id: string;
  artist: any;
  albums: any;

  constructor(private _spotifyService: SpotifyService,
    private _route: ActivatedRoute)
  {

  }
}
