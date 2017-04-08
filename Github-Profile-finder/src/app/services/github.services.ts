import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username: string;
  private client_id = '4b6c2b8d6aaff6900d8f';
  private client_secret = 'f432f05466b4be65420c6741b0ca0c86aff4f8f9';

  constructor(private _http: Http) {
    console.log('Github service is ready');
    this.username = 'Bikash300895';
  }

  getUser() {
    return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
      .map(res => res.json());
  }
}
