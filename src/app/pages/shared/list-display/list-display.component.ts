import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from '../../../provides/services/util.service';

@Component({
  selector: 'app-list-display',
  templateUrl: './list-display.component.html',
  styleUrls: ['./list-display.component.css']
})
export class ListDisplayComponent  {

  @Input('data') data: any;
  @Input('base') base: string;
  @Input('subbase') subbase: string;
  @Input('query') query: string;
  @Input('page') page: number;

  widthTS = 185;

  constructor( private router: Router,
  public util: UtilService) { }

  goTo(id: number) {
    localStorage.setItem('base', this.base);
    localStorage.setItem('sub-base', this.subbase);
    localStorage.setItem('query', this.query);
    localStorage.setItem('page', this.page.toString() );

    this.router.navigate(['/show', id ]);
  }

}
