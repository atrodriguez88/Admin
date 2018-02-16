import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styles: []
})
export class BreadcrumbComponent implements OnInit {

  data: any;

  constructor(private router: Router, private title: Title, private meta: Meta) {

    this.getDataRouter().subscribe(
      (data) => {
        this.data = data;
        this.title.setTitle(data.title);

        const metaTag: MetaDefinition = {
          name: 'description',
          content: data.title
        };
        this.meta.updateTag(metaTag);
      }
    );

  }

  ngOnInit() {
  }

  getDataRouter() {
    return this.router.events
      .filter(value =>
        value instanceof ActivationEnd
      )
      .filter((va: ActivationEnd) => va.snapshot.firstChild === null)
      .map((activationEnd: ActivationEnd) => activationEnd.snapshot.data);
  }

}
