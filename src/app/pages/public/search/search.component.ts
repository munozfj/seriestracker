import { Component, OnInit } from '@angular/core';
import { TheMovieDBService } from '../../../provides/services/the-movie-db.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  query = '';
  series: any;
  loaded = false;
  stm: string[];



  constructor( private tmdb: TheMovieDBService,
                      private actRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.actRoute.paramMap.pipe(  switchMap(params => {this.query = params.get('query');
                                                                                         // tslint:disable-next-line:max-line-length
                                                                                         this.stm = this.query.split('-');
                                                                                         return this.tmdb.getSeriesWithWords(this.stm , 1);
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
    console.log(result);
    this.loaded = true;
  } );
}


}
