import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TheMovieDBService {

  private urlDB = 'https://api.themoviedb.org/3/';
  private apiKey = '740702df730b70b1d21c4ce71815b5f2';

  constructor( private http: HttpClient) { }

  getSeriesWithWords(words: string[], page: number = 1): Observable<Object> {
    const palabras = words.join('%20');
    //  https://api.themoviedb.org/3/search/tv?api_key=740702df730b70b1d21c4ce71815b5f2&language=es&query=good%20place&page=1
    let query = `${this.urlDB}search/tv?api_key=${this.apiKey}&language=es`;
    query += `&query=${palabras}&page=${page}`;


    //  console.log(query);

    return this.http.jsonp(query, 'callback=JSONP_CALLBACK');
  }

  getId(id: number) {
    const query = `${this.urlDB}tv/${id}?api_key=${this.apiKey}&language=es`;
    // query += '&callback=JSONP_CALLBACK';

    //  console.log(query);

    return this.http.jsonp(query, 'callback=JSONP_CALLBACK');
  }
}
