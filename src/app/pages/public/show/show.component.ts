import { UtilService } from './../../../provides/services/util.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TheMovieDBService } from '../../../provides/services/the-movie-db.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styles: []
})
export class ShowComponent implements OnInit {

  id: number;
  serie: any;
  seasonEpisodes: any;
  widthPoster: 500;

  constructor( private actRoute: ActivatedRoute,
                      private router: Router,
                      private tmdb: TheMovieDBService,
                      public util: UtilService
  ) {}

  ngOnInit() {
    this.id = +this.actRoute.snapshot.paramMap.get('id');
    this.tmdb.getId(this.id).subscribe( data => {
      this.serie = data;
      console.log('show');
      console.log(data);
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
