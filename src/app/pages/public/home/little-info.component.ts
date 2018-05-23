import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-little-info',
  templateUrl: './little-info.component.html',
  styles: []
})
export class LittleInfoComponent  {

  @Input('data2') data2: any;

  constructor() { }
}
