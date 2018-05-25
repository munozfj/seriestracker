import { OmdbService } from './../../../provides/services/omdb.service';
import { UtilService } from './../../../provides/services/util.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TheMovieDBService } from '../../../provides/services/the-movie-db.service';
import { switchMap } from 'rxjs/operators';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styles: []
})
export class ShowComponent implements OnInit {

  id: number;
  serie: any;
 // imdb_serie: any;
  seasonEpisodes: any[] [] = [] ;
  widthPoster: 500;
  widthSeasonPoster: 30;
  panelOpenState: boolean = false;


  constructor( private actRoute: ActivatedRoute,
                      private router: Router,
                      private tmdb: TheMovieDBService,
                      public util: UtilService
  ) {}

  ngOnInit() {
    // obtengo el parametro id de la ruta
    this.id = +this.actRoute.snapshot.paramMap.get('id');

    // obtengo la informacion de la serie
    this.tmdb.getId(this.id).subscribe( data1 => {
      this.serie = data1;
      // console.log('show');
       console.log(data1);

       for ( const season of this.serie.seasons) {

         this.seasonEpisodes[this.id] = [];
        this.tmdb
        .getSeasonEpisodes(this.id, season.season_number )
        .subscribe(data => {

          this.seasonEpisodes[this.id] [season.season_number] = data;
        });

      }
    });



   /*  this.ss
      .getSeasonEpisodes(this.id, 1)
      .subscribe(data => (this.seasonEpisodes = data)); */
  }

  returnTo() {
    // console.log('quiero volver');
    let  toUrl = '/' ;
    toUrl += ( localStorage.getItem('base') ) ? '/' + localStorage.getItem('base')  : '';
    toUrl += ( localStorage.getItem('sub-base') ) ? '/' + localStorage.getItem('sub-base')  : '';
    toUrl += ( localStorage.getItem('query') ) ? '/' + localStorage.getItem('query')  : '';
   // localStorage.getItem('sub-base') + '/' + localStorage.getItem('query');
    // console.log('quiero volver a: ' + toUrl);
    this.router.navigate([toUrl]);
  }
}
