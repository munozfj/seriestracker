import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

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
  @Input('order') order: string;

  // public backgroundImg: SafeStyle;

  constructor(private sanitizer: DomSanitizer,
                     private router: Router) { }

  sanitizeImage(url: string) {
    return this.sanitizer.bypassSecurityTrustStyle('url(' + url + ')');
  }

  goTo( id: number) {
    localStorage.removeItem('base');
    localStorage.removeItem('sub-base');
    localStorage.removeItem('query');
    localStorage.removeItem('page');
    this.router.navigate(['/show', id]);

  }
}
