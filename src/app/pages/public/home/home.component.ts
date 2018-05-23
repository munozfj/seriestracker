import { TheMovieDBService } from './../../../provides/services/the-movie-db.service';
import { Component, OnInit } from '@angular/core';
import { Util } from '../../../lib/util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  popular_series: any ;
  year_pop_series: any;
  upcoming_series: any;
  today: Date = new Date();
  year: Date = new Date( this.today.getFullYear(), 0 , 1);
  date: Date = new Date();

  constructor( private tmdb: TheMovieDBService) { }

  ngOnInit() {

    this.tmdb.getSeries(  1,
                                  'popularity.desc'      ).subscribe( data => this.popular_series = data );

    this.tmdb.getSeries(  1,
                                  'popularity.desc',
                                  Util.formattedDate(this.year),
                                  Util.formattedDate(this.today) ).subscribe( data => this.year_pop_series = data );

    this.tmdb.getSeries( 1,
      'first_air_date.asc',
      Util.formattedDate(  this.today)
                                ).subscribe( data => this.upcoming_series = data );


  }

  getTopSeries() {
    return this.popular_series;
  }


}
