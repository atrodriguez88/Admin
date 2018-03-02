import { Component, OnInit } from '@angular/core';

import swal from 'sweetalert';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  user: User; // Obtengo User del Modelo

  img: File = null;
  imgTemporary: any;

  constructor() {
  }

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

  selectImg(event) {

    console.log(event);

    if (!event.target.files[0]) {
      this.img = null;
      return;
    }

    if (event.target.files[0].type.indexOf('image') < 0) {
      this.img = null;
      swal(`Only Image`, `It is not a image`, `error`);
      return;
    }

    this.imgTemp();

    this.img = event.target.files[0];
    console.log(this.img);
  }

  upLoad() {
    console.log(`OK`);
  }

  imgTemp() {
    let reader = new FileReader();
    let urlImgTemp = reader.readAsDataURL(event.target.files[0]);

    reader.onloadend = () => {
      console.log(reader.result);
      this.imgTemporary = reader.result;
    }
  }

}



interface User {
  name: string;
  email: string;
  img: string;
}