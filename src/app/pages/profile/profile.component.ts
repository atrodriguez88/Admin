import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  user: User; // Obtengo User del Modelo

  constructor() { }

  ngOnInit() {
    this.user = {
      name: `Ariel`,
      email: `ariel@test.com`
    };
  }

  saveForm(value: User) {
    console.log(value);

    this.user.name = value.name;
    this.user.email = value.email;
  }

}



interface User {
  name: string;
  email: string;
}