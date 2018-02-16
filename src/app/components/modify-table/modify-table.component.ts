import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { findLast } from '@angular/compiler/src/directive_resolver';
import { isString } from 'util';
import { Title } from '@angular/platform-browser/src/browser/title';

@Component({
  selector: 'app-modify-table',
  templateUrl: './modify-table.component.html',
  styles: []
})
export class ModifyTableComponent implements OnInit {

  @Input() tit: string;
  @Input() first: string;
  @Input() last: string;
  @Output() oFirst = new EventEmitter<string>();
  @Output() oLast = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    console.log('El nombre en el ngOnInit', this.first, this.last);
  }

  changeValues() {
    console.log('El nombre en el changeValues', this.first, this.last);

    if (this.first.length > 0) {
      this.first = this.first.toUpperCase();
    }
    else {
      // console.log(this.first.match(/[a - z]/));
      this.first = `Not Null`;
    }

    if (this.last.length > 0) {
      this.last = this.last.toUpperCase();
    }
    else {
      this.last = `Not Null`;
    }
    this.oFirst.emit(this.first);
    this.oLast.emit(this.last);
  }

  cleanFirst() {
    document.getElementsByName('first')[0].nodeValue = '';
    this.first = document.getElementsByName('first')[0].nodeValue;
  }
  cleanLast() {
    document.getElementsByName('last')[0].nodeValue = '';
    this.last = document.getElementsByName('last')[0].nodeValue;
  }

}
