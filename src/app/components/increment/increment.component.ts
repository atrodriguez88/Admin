import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: []
})
export class IncrementComponent implements OnInit {

  @Input('titulo') leyend: string;
  @Input() porcent: number;

  @Output() changeValue = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
    console.log('Leyend', this.leyend);
    console.log('Porcent', this.porcent);
  }

  incrementProgress() {
    if (this.porcent + 5 <= 100) {
      this.porcent += 5;
    }
    else {
      this.porcent = 100;
    }
    this.changeValue.emit(this.porcent);
  }

  decrementProgress() {

    if (this.porcent - 5 >= 0) {
      this.porcent -= 5;
    }
    else {
      this.porcent = 0;
    }
    this.changeValue.emit(this.porcent);
  }

}
