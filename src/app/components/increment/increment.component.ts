import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: []
})
export class IncrementComponent implements OnInit {

  @ViewChild('txtIncremet') txt: ElementRef;

  @Input('titulo') leyend: string;
  @Input() porcent: number;

  @Output() changeValue = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  incrementProgress() {
    if (this.porcent + 5 <= 100) {
      this.porcent += 5;
    }
    else {
      this.porcent = 100;
    }
    this.changeValue.emit(this.porcent);
    this.txt.nativeElement.focus();
  }

  decrementProgress() {

    if (this.porcent - 5 >= 0) {
      this.porcent -= 5;
    }
    else {
      this.porcent = 0;
    }
    this.changeValue.emit(this.porcent);
    this.txt.nativeElement.focus();
  }

  onChange(event) {

    if (event >= 100) {
      this.porcent = 100;
    }
    else if (event <= 0) {
      this.porcent = 0;
    }
    else {
      this.porcent = event;
    }

    // other way
    // this.txt.nativeElement.value = this.porcent
    this.txt['value'] = this.porcent;
    this.changeValue.emit(this.porcent);
  }

}
