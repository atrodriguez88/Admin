import { Component, OnInit } from '@angular/core';
import { Router, rou } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  search(term) {
    this.router.navigate(['search/', term]);
  }

}
