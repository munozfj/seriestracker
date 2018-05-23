import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styles: [
    `

  .h500 {
    height: 300px;
    padding-left: 0;
    padding-right: 5px;
    border: black 1px solid;
  }

  .h300 {
    height: 200px;
    padding-left: 0;
    padding-right: 5px;
    border: black 1px solid;
  }



  .gallery {
    border: black solid 4px;
  }

  `
]
})
export class GalleryComponent {

  @Input('title') title: string;
  @Input('data') data: any;
  @Input('criteria') criteria: string;

  // public backgroundImg: SafeStyle;

  constructor(private sanitizer: DomSanitizer) { }

  sanitizeImage(url: string) {
    return this.sanitizer.bypassSecurityTrustStyle('url(' + url + ')');
  }

}
