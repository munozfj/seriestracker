import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-display',
  templateUrl: './list-display.component.html',
  styleUrls: ['./list-display.component.css']
})
export class ListDisplayComponent  {

  @Input('data') data: any;
  @Input('component') component: string;
  @Input('query') query: string;
  @Input('page') page: number;

  widthTS = 185;

  constructor( private router: Router) { }

  goTo(id: number) {
    localStorage.setItem('base', this.component);
    localStorage.setItem('query', this.query);
    localStorage.setItem('page', this.page.toString() );
    this.router.navigate(['/show', id ]);
  }

}
