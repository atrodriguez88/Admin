import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, tipo: string): any {

    let url: string = '';
    if (!img) {
      return url + '/user/noImage.jpg';
    } else {
      // Here obtein img of service (example)
      switch (img) {
        case 'user':
          url = 'something';
          break;
        case 'admin':
          url = 'something';
          break;
        default:
          url = 'something';

          break;
      }
    }


    return 'Funciona';
  }

}
