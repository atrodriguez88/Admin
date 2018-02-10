import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  // Se puede utilizar tambien [titulo]='otraManera'
  @Output() otraManera = 'Progress Greeeen';

  @Output() porcent1: number = 25;
  @Output() porcent2: number = 15;

  constructor() { }

  ngOnInit() {
  }
  updatePorcent1(evento) {
    this.porcent1 = evento;
  }
  updatePorcent2(evento) {
    this.porcent2 = evento;
  }

}
