import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OmdbService {

  private apiKey = '11698a91';
  private urlDB = 'http://www.omdbapi.com/?apikey=' + this.apiKey;

  constructor( private http: HttpClient) { }

  getId(id: number) {
    const query = `${this.urlDB}&i=${id}`;
    // query += '&callback=JSONP_CALLBACK';

    console.log(query);
    return this.http.jsonp(query, 'callback=JSONP_CALLBACK');
  }
}
