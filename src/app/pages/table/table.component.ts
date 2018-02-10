import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: []
})
export class TableComponent implements OnInit {

  @Output() nombre: string = '';
  @Output() apellido: string = '';

  constructor() { }

  ngOnInit() {
  }

}
