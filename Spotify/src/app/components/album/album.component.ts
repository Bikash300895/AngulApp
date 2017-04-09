import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {SpotifyService} from "../../services/spotify.service";

@Component({
  selector: 'album',
  templateUrl: './album.component.html',
  providers: [SpotifyService]
})
export class AlbumComponent implements OnInit{
  ngOnInit(): void {
    this._route.params
      .map(params => params['id'])
      .subscribe( (id) => {
        this._spotifyService.getAlbum(id)
          .subscribe(album => {
            this.album = album;
          });
      });
  }
  id: string;
  artist: any;
  album: any;

  constructor(private _spotifyService: SpotifyService,
              private _route: ActivatedRoute)
  {

  }
}
