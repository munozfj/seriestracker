import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-display',
  templateUrl: './list-display.component.html',
  styleUrls: ['./list-display.component.css']
})
export class ListDisplayComponent  {

  @Input('data') data: any;
  widthTS = 185;

  constructor() { }


}
