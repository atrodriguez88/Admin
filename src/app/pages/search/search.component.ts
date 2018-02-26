import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  http: Http;
  term: string;

  data: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((param) => {
      this.term = param['term'];
      console.log(this.term);
    });
  }

  find(term: string) {

    let url = `http://someAddress.com/elements`; // Example

   return this.http.get(url)
      .map((res) => {

        this.data = res.json();
    });
  }

}
