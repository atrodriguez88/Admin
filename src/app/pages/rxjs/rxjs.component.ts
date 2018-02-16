import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor() {


    this.returnObserv().retry(2)
      .subscribe(
      value => { console.log('Subscribe', value); }, // Next
      error => { console.error('Error for 2 time', error); },
      () => { console.log('Observable is finished'); },
    );

  }

  ngOnInit() {
  }

  returnObserv() {

    const obs = new Observable<number>(observerr => {

      let cont = 0;
      const interv = setInterval(
        () => {

          cont += 1;
          observerr.next(cont);

          if (cont === 5) {
            clearInterval(interv); // Stoped Interval... but Observable continue listed
            observerr.complete();
          }
          if (cont === 2) {
            // clearInterval(interv); // Stoped Interval... but Observable continue listed
            observerr.error('Obs Error !!!');
          }
        },
        1000
      );

    });
    return obs;

  }

}
