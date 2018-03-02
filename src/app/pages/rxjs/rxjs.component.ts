import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {

    this.subscription = this.returnObserv().subscribe(
      value => { console.log('Subscribe', value); }, // Next
      error => { console.error('Error for 2 time', error); },
      () => { console.log('Observable is finished'); },
    );

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  returnObserv() {

    const obs = new Observable<any>(observerr => {

      let cont = 0;  // Puedo usar esta contante para no verme en la obligacion de usar el map()
      const interv = setInterval(
        () => {

          let obj = {   // Uso del map() para objetos
            value: cont
          };
          cont += 1;
          // observerr.next(cont);
          observerr.next(obj);

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

    })
      .retry(2)
      .map((obj: any, index?) => {     // index is opcional
        return obj.value + index;
      })
      .filter((valor: number, index) => {   // index is opcional

        if (valor % 2 === 0) {
          // even
          return false;
        } else {
          // odd
          return true;
        }
      });
    return obs;

  }

}
