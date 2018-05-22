import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showImage'
})
export class ShowImagePipe implements PipeTransform {

  transform(photo: string, size: number,  type: string = 'poster' , add?: string )  {

    const localUrl = './assets/images/';
    const remoteUrl = 'https://image.tmdb.org/t/p/';

    let image: string;

      photo = ( photo ) ? photo.trim() : '';

    //  console.log( 'llego:' + photo + '-' + size );

    if ( photo) {
      image = remoteUrl;
      image += (photo && size) ? `w${size}` : 'w300';
      image += photo;
    } else {
      image = localUrl;
      switch ( type ) {
        case 'poster': image += 'no-image-poster.jpg';
        break;
        case 'backdrop': image += 'no-image-backdrop.jpg';
        break;
        default: image += 'no-image-backdrop.jpg';
        break;
      }
    }

    image = (add === 'url' ) ? 'url(' + image + ')' : image;
      // console.log('formato: ' + image );

    return image;
    // return this.sanitizer.bypassSecurityTrustUrl(image);
  }

}
