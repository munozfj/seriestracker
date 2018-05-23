import { Component, OnInit } from '@angular/core';
import { TheMovieDBService } from '../../../provides/services/the-movie-db.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { UtilService } from '../../../provides/services/util.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {

  base = '';
  subBase = '';
  query = '';
  page: number;
  series: any;
  loaded = false;
  stm: string[];
  oldDate: Date = this.util.getNewDate('1700-01-01');
  today: Date = new Date();
  year: Date = new Date(this.today.getFullYear(), 0, 1);
  // date: Date = new Date();

  constructor(
    private tmdb: TheMovieDBService,
    private actRoute: ActivatedRoute,
    public util: UtilService
  ) {}

  ngOnInit() {
    /* this.actRoute.paramMap.subscribe(params => {
      this.base = params.get('base');
      this.query = params.get('query');

      this.stm = this.base === 'search' ? this.query.split('-') : [];
    });*/

    this.actRoute.paramMap
      .pipe(
        switchMap(params => {
          this.base = params.get('base');
          this.subBase = params.get('subbase');
          this.query = params.get('query');

          this.stm = ( this.subBase === 'search' ) ? this.query.split('-') : [];

          const pageStorage =   localStorage.getItem('page')
            ? +localStorage.getItem('page')
            : 1;

          localStorage.removeItem('base');
          localStorage.removeItem('sub-base');
          localStorage.removeItem('query');
          localStorage.removeItem('page');

          if (this.subBase === 'series') {
            switch (this.query) {
              case 'top':
                return this.tmdb
                  .getSeries(pageStorage,
                    'popularity.desc',
                  this.util.formattedDate(this.oldDate),
                  this.util.formattedDate(this.today)
                  );
                 // .subscribe(data => (this.series = data));
              //  break;

              case 'year':
                return this.tmdb
                  .getSeries(
                    pageStorage,
                    'popularity.desc',
                    this.util.formattedDate(this.year),
                    this.util.formattedDate(this.today)
                  );
                 // .subscribe(data => (this.series = data));
              //   break;

              case 'upcoming':
                return this.tmdb
                  .getSeries(
                    pageStorage,
                    'first_air_date.asc',
                    this.util.formattedDate(this.today)
                  );
                //  .subscribe(data => (this.series = data));
              //    break;
            }
          }
          if (this.subBase === 'search') {
            return this.tmdb.getSeriesWithWords(this.stm, pageStorage);
          }
        })
      )
      .subscribe(result => {
        this.series = result;
        console.log(result);
        this.loaded = true;
      });
  }

  loadPage(pageNr: number) {
    this.loaded = false;
    if (this.subBase === 'search') {
    this.tmdb.getSeriesWithWords(this.stm, pageNr).subscribe(data => {
      this.series = data;
      console.log(data);
      this.loaded = true;
    });
  }

  if (this.subBase === 'series') {
    switch (this.query) {
      case  'top':
      this.tmdb.getSeries(  pageNr,
        'popularity.desc'  ,
        this.util.formattedDate(this.oldDate),
        this.util.formattedDate(this.today)    ).subscribe( data => { this.series = data; console.log(data); this.loaded = true; } );
        break;

        case  'year':
        this.tmdb.getSeries(  pageNr,
          'popularity.desc',
          this.util.formattedDate(this.year),
          this.util.formattedDate(this.today) ).subscribe( data => { this.series = data; console.log(data); this.loaded = true; } );
        break;

        case  'upcoming':
      this.tmdb.getSeries( pageNr,
        'first_air_date.asc',
        this.util.formattedDate(  this.today)
                                  ).subscribe( data => { this.series = data; console.log(data); this.loaded = true; } );
        break;
    }
  }

  }

  listChange( order: string ) {

    this.loaded = false;
    console.log('estoy en onchage:' + order);


    this.actRoute.paramMap
      .pipe(
        switchMap(params => {
          this.base = params.get('base');
          this.subBase = params.get('subbase');
          this.query = params.get('query');

                  localStorage.removeItem('base');
          localStorage.removeItem('sub-base');
          localStorage.removeItem('query');
          localStorage.removeItem('page');

          if (this.subBase === 'series') {
            switch (this.query) {
              case 'top':
                return this.tmdb
                  .getSeries(1, order);
                 // .subscribe(data => (this.series = data));
              //  break;

              case 'year':
                return this.tmdb
                  .getSeries(
                    1,
                    order,
                    this.util.formattedDate(this.year),
                    this.util.formattedDate(this.today)
                  );
                 // .subscribe(data => (this.series = data));
              //   break;

              case 'upcoming':
                return this.tmdb
                  .getSeries(
                    1,
                    order,
                    this.util.formattedDate(this.today)
                  );
                //  .subscribe(data => (this.series = data));
              //    break;
            }
          }

        })
      )
      .subscribe(data => {
        this.series = data;
        console.log(data);
        this.loaded = true;
      });


  }
}
