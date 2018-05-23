import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TheMovieDBService } from '../../provides/services/the-movie-db.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  query = '';
  page: number;
  series: any;
  loaded = false;
  stm: string[];



  constructor( private tmdb: TheMovieDBService,
                      private actRoute: ActivatedRoute ) { }

  ngOnInit() {

   /*  this.query = this.actRoute.snapshot.paramMap.get('query');
    this.stm = this.query.split('-');

    const pageStorage = ( localStorage.getItem('base') === 'search' ) ? +localStorage.getItem('page') : 1;
    localStorage.removeItem('base');
    localStorage.removeItem('query');
    localStorage.removeItem('page');

  // console.log(this.query + '  ' + pageStorage);
    this.tmdb.getSeriesWithWords(this.stm , pageStorage).subscribe( result => {this.series = result;
     //  console.log(result);
      this.loaded = true;
    } ); */

    this.actRoute.paramMap.pipe(  switchMap(params => {this.query = params.get('query');
                                                                                         // tslint:disable-next-line:max-line-length
                                                                                         this.stm = this.query.split('-');

   const pageStorage = ( localStorage.getItem('base') === 'search' ) ? +localStorage.getItem('page') : 1;
    localStorage.removeItem('base');
    localStorage.removeItem('query');
    localStorage.removeItem('page');
                           return this.tmdb.getSeriesWithWords(this.stm , pageStorage);
                                                                                        }
                                                                      )
                                                                    ).subscribe( result => {this.series = result;
                                                                    console.log(result);
                                                                    this.loaded = true;
                                                                  } );
  }


loadPage(pageNr: number) {
  this.loaded = false;
  this.tmdb.getSeriesWithWords(this.stm, pageNr).subscribe( result => {this.series = result;
    // console.log(result);
    this.loaded = true;
  } );
}


}
