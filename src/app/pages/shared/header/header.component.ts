import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  query = '';
  isCollapsed = false;

  constructor( private router: Router) { }

  onSearch() {
    // console.log( this.query  );
    if ( !this.query ) { return null; }

    // formateo el criterio de busqueda
    const query = this.query.trim().split(' ').join('-');

    // navego a la pagina de search
    this.router.navigate(['/search', query ]);
  }

}
