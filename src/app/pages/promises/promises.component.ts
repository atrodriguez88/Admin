import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: []
})
export class PromisesComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    this.count3seg().then(
      (value) => { console.log('finish succefully', value); }
    ).catch(
      (error) => { console.error('Error on promise', error); }
      );
  }

  count3seg(): Promise<boolean> {
    // Promise
    const prom = new Promise<boolean>((resolve, reject) => {

      let cont = 0;
      const interv = setInterval(() => {
        console.log(cont);
        cont += 1;
        if (cont === 3) {
          resolve(true);
          // reject('Simplily Error');
          clearInterval(interv);
        }
      }
        , 1000);

    });

    return prom;
  }



}
