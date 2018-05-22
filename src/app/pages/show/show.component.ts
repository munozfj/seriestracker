import { TheMovieDBService } from './../../provides/services/the-movie-db.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
                      private tmdb: TheMovieDBService
  ) {}

  ngOnInit() {
    this.id = +this.actRoute.snapshot.paramMap.get('id');
    this.tmdb.getId(this.id).subscribe( data => this.serie = data );



   /*  this.ss
      .getSeasonEpisodes(this.id, 1)
      .subscribe(data => (this.seasonEpisodes = data)); */
  }

  returnTo() {
    console.log('quiero volver');
    const toUrl = '/' + localStorage.getItem('component') + '/' + localStorage.getItem('query');
    console.log('quiero volver a: ' + toUrl);
    this.router.navigate([toUrl]);
  }
}
