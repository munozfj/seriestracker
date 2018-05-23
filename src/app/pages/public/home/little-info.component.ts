import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-little-info',
  templateUrl: './little-info.component.html',
  styles: [
    `
    .top-right {
      position: relative;
      float: right;
    }

     p.titulo {
      overflow:hidden;
      white-space:nowrap;
      text-overflow: ellipsis;

    }

    `
  ]
})
export class LittleInfoComponent  {

  @Input('data2') data2: any;

  constructor() { }
}
